# Chicken on a Line

JonGem(https://jongem.com)이 서비스하는 Chicken on a Line의 소스예요. 원작의 고정된 커밋에 JonGem의 변경을 적용한 전체 트리예요.

The source of Chicken on a Line as JonGem (https://jongem.com) serves it: the original at a pinned commit with JonGem's changes applied.

- 원작 / Original: https://github.com/js13kGames/chicken-on-a-line/tree/938c75ddf1d51d2421f60c62fcf3eeb54de45f77
- 만든 사람 / Author: Martin Hentschel
- 라이선스 / License: MIT (`LICENSE`)
- JonGem이 넣은 점수 SDK 연결은 MIT예요 (`LICENSE-SDK.txt`). / JonGem's score SDK hookup is MIT (`LICENSE-SDK.txt`).
- 버전 / Version: chicken-on-a-line-1 (https://github.com/diominor/jongem-game-sources/tree/chicken-on-a-line-1/chicken-on-a-line)

## JonGem이 고친 것 / What JonGem changed

- 점수판(점수)을 붙였어요.
  Added the score leaderboard.
- 빌드한 파일이 저장소에 없어서, 원본 스크립트를 차례로 읽는 test.html을 첫 페이지로 쓰고 index.html은 뺐어요.
  The repo has no built file, so test.html, which loads the original scripts in turn, is the start page and index.html is left out.
- 손을 뗄 때마다 나던 스크립트 오류를 고쳤어요(touchend에서 changedTouches를 읽어요).
  Fixed the script error on every finger lift (touchend reads changedTouches).

## 바뀐 파일 / Files

- 고친 파일 / Changed:
  - `js/main.js`
  - `js/screens.js`
  - `test.html`
- 더한 파일 / Added:
  - `LICENSE-SDK.txt`
- 뺀 파일 / Removed:
  - `.gitignore`
  - `index.html`
