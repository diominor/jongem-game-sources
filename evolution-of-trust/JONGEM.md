# Evolution of Trust

JonGem(https://jongem.com)이 서비스하는 Evolution of Trust의 소스예요. 원작의 고정된 커밋에 JonGem의 변경을 적용한 전체 트리예요.

The source of Evolution of Trust as JonGem (https://jongem.com) serves it: the original at a pinned commit with JonGem's changes applied.

- 원작 / Original: https://github.com/ncase/trust/tree/6ec45d73befdb922bd40654dd1c1c903a953562f
- 만든 사람 / Author: Nicky Case
- 라이선스 / License: CC0-1.0 (`LICENSE`)
- 버전 / Version: evolution-of-trust-1 (https://github.com/diominor/jongem-game-sources/tree/evolution-of-trust-1/evolution-of-trust)

## JonGem이 고친 것 / What JonGem changed

- pixi가 글로 만들던 함수(new Function)를 보통 함수로 바꾸고, 그림을 CORS로 읽어요.
  Replaced the functions pixi built from text (new Function) with plain ones, and loads images with CORS.
- Facebook·Twitter 공유 링크를 빼고, 슬라이드 글을 .txt 파일에서 읽어요.
  Removed the Facebook and Twitter share links, and reads the slides' text from a .txt file.

## 바뀐 파일 / Files

- 고친 파일 / Changed:
  - `js/core/Loader.js`
  - `js/lib/pixi.min.js`
  - `js/lib/sharing.js`
  - `js/main.js`
- 더한 파일 / Added:
  - `words.txt`
- 뺀 파일 / Removed:
  - `words.html`
