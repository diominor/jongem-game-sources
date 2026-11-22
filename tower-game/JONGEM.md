# Tower Game

JonGem(https://jongem.com)이 서비스하는 Tower Game의 소스예요. 원작의 고정된 커밋에 JonGem의 변경을 적용한 전체 트리예요.

The source of Tower Game as JonGem (https://jongem.com) serves it: the original at a pinned commit with JonGem's changes applied.

- 원작 / Original: https://github.com/iamkun/tower_game/tree/c6fa84afe179b661fa71cf7cc8788d0c47ca2875
- 만든 사람 / Author: BMQB, Inc.
- 라이선스 / License: MIT (`LICENSE`)
- 버전 / Version: tower-game-1 (https://github.com/diominor/jongem-game-sources/tree/tower-game-1/tower-game)

## JonGem이 고친 것 / What JonGem changed

- Google 애널리틱스를 빼고, Zepto가 글을 코드로 실행하던 eval 두 곳을 막았어요.
  Removed Google Analytics and the two places where Zepto ran text as code with eval.

## 바뀐 파일 / Files

- 고친 파일 / Changed:
  - `assets/zepto-1.1.6.min.js`
  - `index.html`
- 뺀 파일 / Removed:
  - `.gitignore`
