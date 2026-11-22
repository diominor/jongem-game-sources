# Scroll Run

JonGem(https://jongem.com)이 서비스하는 Scroll Run의 소스예요. 원작의 고정된 커밋에 JonGem의 변경을 적용한 전체 트리예요.

The source of Scroll Run as JonGem (https://jongem.com) serves it: the original at a pinned commit with JonGem's changes applied.

- 원작 / Original: https://github.com/js13kGames/scroll-run/tree/d1d2c6ceb6c9cffc6f205f06d1390da7ff24609d
- 만든 사람 / Author: Bartek Szopka
- 라이선스 / License: MIT (`LICENSE`)
- JonGem이 넣은 점수 SDK 연결과 저장 심은 MIT예요 (`LICENSE-SDK.txt`). / JonGem's score SDK hookup and save shim are MIT (`LICENSE-SDK.txt`).
- 버전 / Version: scroll-run-1 (https://github.com/diominor/jongem-game-sources/tree/scroll-run-1/scroll-run)

## JonGem이 고친 것 / What JonGem changed

- 거리마다 점수판(완주 시간)을 붙였어요.
  Added a leaderboard (finish time) for each distance.
- 거리별 최고 기록을 JonGem 저장에 남겨요.
  Keeps the best time of each distance in your JonGem save.
- 페이지 끝으로 바로 가는 키(End, Home, PageUp, PageDown, 스페이스)를 막아, 스크롤해야만 완주하게 했어요.
  Blocked the keys that jump to the page end (End, Home, PageUp, PageDown, Space), so a run needs scrolling.

## 바뀐 파일 / Files

- 고친 파일 / Changed:
  - `index.html`
- 더한 파일 / Added:
  - `LICENSE-SDK.txt`
  - `jongem/storage-to-jongem.js`
