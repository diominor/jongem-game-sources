/*!
 * JonGem storage shim
 * Copyright (c) 2026 JonGem
 * SPDX-License-Identifier: MIT
 * Released under the MIT License. The full text is LICENSE-SDK.txt in the JonGem repository,
 * the same text as the "MIT" entry of the SPDX License List.
 */
// JonGem storage shim (catalog/shims/README.md). A localStorage for a game in JonGem's sandboxed
// frame, where the browser's own one throws. The keys this script's data-keys attribute lists
// (a JSON array, `*` at the end for a prefix) are kept in the game's JonGem save slot; any
// other key lives in memory until the page closes. Nothing is written to the browser's storage.
(() => {
  const FORMAT = 'jongem-storage-1';
  const REASONS = {
    too_large: 'the saved keys are over the 64KB save limit',
    too_deep: 'the saved keys are over the 64KB save limit',
    no_sdk: 'the JonGem SDK is not on this page',
    not_this_format: 'the save slot holds data this shim did not write',
    signed_out: 'the player signed out',
  };
  const items = new Map();
  const written = new Set();
  const warned = new Set();
  // 'loading' until JonGem.load() answers, then 'open' (saves go out) or 'closed' (memory only:
  // no SDK, the load failed, or the slot holds something this shim did not write).
  let slot = 'loading';
  let dirty = false;
  let problem = null;
  let markReady;
  const ready = new Promise((resolve) => {
    markReady = resolve;
  });

  const warn = (reason, text) => {
    if (warned.has(reason)) return;
    warned.add(reason);
    console.warn(`JonGem storage: ${text}`);
  };

  const keys = (() => {
    try {
      const list = JSON.parse(document.currentScript?.getAttribute('data-keys') ?? '[]');
      if (Array.isArray(list)) return list.map(String);
    } catch {}
    warn('keys', 'data-keys is not a JSON list; nothing is saved');
    return [];
  })();

  const kept = (key) =>
    keys.some((name) => (name.endsWith('*') ? key.startsWith(name.slice(0, -1)) : key === name));

  const sdk = () => {
    const jongem = window.JonGem;
    return typeof jongem?.save === 'function' && typeof jongem.load === 'function' ? jongem : null;
  };

  const fail = (reason) => {
    problem = reason;
    const why = REASONS[reason] ?? `JonGem did not answer (${reason})`;
    warn(reason, `progress is not saved because ${why}; it stays until the page closes`);
  };

  // The SDK sends at most one save every two seconds, the last one given, and sends a waiting one
  // before the page goes away, so every change goes to it at once.
  const persist = () => {
    if (slot === 'loading') dirty = true;
    const jongem = sdk();
    if (slot !== 'open' || !jongem) return;
    const saved = Object.fromEntries([...items].filter(([key]) => kept(key)));
    let saving;
    try {
      saving = jongem.save({ format: FORMAT, items: saved });
    } catch {
      fail('unavailable');
      return;
    }
    saving.then(
      () => {
        problem = null;
      },
      (error) => fail(error?.reason ?? 'unavailable'),
    );
  };

  const set = (name, value) => {
    const key = String(name);
    items.set(key, String(value));
    written.add(key);
    if (kept(key)) persist();
  };

  const remove = (name) => {
    const key = String(name);
    if (!items.has(key)) return;
    items.delete(key);
    written.add(key);
    if (kept(key)) persist();
  };

  const api = {
    getItem: (name) => items.get(String(name)) ?? null,
    setItem: set,
    removeItem: remove,
    clear: () => {
      for (const key of [...items.keys()]) remove(key);
    },
    key: (index) => [...items.keys()][index] ?? null,
  };

  // localStorage.bestScore and localStorage['score-1'] read and write items too.
  const storage = new Proxy(api, {
    get: (target, name) => {
      if (name === 'length') return items.size;
      if (typeof name !== 'string' || Object.hasOwn(target, name)) return target[name];
      return items.get(name);
    },
    set: (_target, name, value) => {
      if (typeof name === 'string' && name !== 'length') set(name, value);
      return true;
    },
    deleteProperty: (_target, name) => {
      if (typeof name === 'string') remove(name);
      return true;
    },
    has: (target, name) => (typeof name === 'string' && items.has(name)) || name in target,
    ownKeys: () => [...items.keys()],
    getOwnPropertyDescriptor: (_target, name) =>
      typeof name === 'string' && items.has(name)
        ? { value: items.get(name), writable: true, enumerable: true, configurable: true }
        : undefined,
  });

  try {
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      enumerable: true,
      get: () => storage,
    });
  } catch {
    warn('install', 'could not replace localStorage');
  }

  const close = (reason) => {
    slot = 'closed';
    fail(reason);
    markReady();
  };

  // A slot that could not be read, or that holds something else, is never written over: saving
  // then would replace the player's progress with this page's.
  const begin = (data) => {
    const saved = data?.format === FORMAT ? data.items : null;
    if (data !== null && (typeof saved !== 'object' || saved === null || Array.isArray(saved))) {
      close('not_this_format');
      return;
    }
    for (const [key, value] of Object.entries(saved ?? {})) {
      if (typeof value === 'string' && kept(key) && !written.has(key)) items.set(key, value);
    }
    slot = 'open';
    if (dirty) persist();
    markReady();
  };

  const jongem = sdk();
  if (jongem) jongem.load().then(begin, (error) => close(error?.reason ?? 'unavailable'));
  else close('no_sdk');

  window.JonGemStorage = {
    // Resolves once the saved keys are in, or it is known there are none. Never rejects.
    ready,
    // Why the last save or load failed (a JonGem.save failure reason, or no_sdk or
    // not_this_format), or null.
    problem: () => problem,
  };
})();
