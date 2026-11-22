# Sciara of Colors

JonGem(https://jongem.com)이 서비스하는 Sciara of Colors의 소스예요. 원작의 고정된 커밋에 JonGem의 변경을 적용한 전체 트리예요.

The source of Sciara of Colors as JonGem (https://jongem.com) serves it: the original at a pinned commit with JonGem's changes applied.

- 원작 / Original: https://github.com/js13kGames/sciara-of-colors/tree/83602374720208e2a3304b2d7c9dd7ba15dfb880
- 만든 사람 / Author: Gabriele D'Arrigo
- 라이선스 / License: Unlicense (`LICENSE`)
- JonGem이 넣은 점수 SDK 연결은 MIT예요 (`LICENSE-SDK.txt`). / JonGem's score SDK hookup is MIT (`LICENSE-SDK.txt`).
- 버전 / Version: sciara-of-colors-1 (https://github.com/diominor/jongem-game-sources/tree/sciara-of-colors-1/sciara-of-colors)

## JonGem이 고친 것 / What JonGem changed

- 점수판(점수)을 붙였어요.
  Added the score leaderboard.
- 압축한 js/game.min.js 대신 같은 내용의 원본 js/game.js를 읽게 했어요.
  Loads the readable js/game.js instead of its minified copy, js/game.min.js.
- 폰에서 화면 양옆이 잘리지 않게 캔버스를 창 너비에도 맞췄어요.
  Fits the canvas to the window width too, so phones see the whole screen.

## 바뀐 파일 / Files

- 고친 파일 / Changed:
  - `index.html`
  - `js/game.js`
- 더한 파일 / Added:
  - `LICENSE-SDK.txt`
