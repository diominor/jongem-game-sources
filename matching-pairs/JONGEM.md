# Matching Pairs

JonGem(https://jongem.com)이 서비스하는 Matching Pairs의 소스예요. 원작의 고정된 커밋에 JonGem의 변경을 적용한 전체 트리예요.

The source of Matching Pairs as JonGem (https://jongem.com) serves it: the original at a pinned commit with JonGem's changes applied.

- 원작 / Original: https://github.com/gamedolphin/matching-pairs/tree/894e668edf1c559daa75fae70718f7de88e4a1ae
- 만든 사람 / Author: Sandeep Nambiar
- 라이선스 / License: MIT (`LICENSE`)
- 버전 / Version: matching-pairs-1 (https://github.com/diominor/jongem-game-sources/tree/matching-pairs-1/matching-pairs)

## JonGem이 고친 것 / What JonGem changed

- 페이지 주소를 바꾸던 Phaser 함수가 이동하지 않게 하고, 그림을 CORS로 읽어 격리 칸에서도 그려요.
  Stopped a Phaser helper from moving the page, and loads images with CORS so they draw in the sandbox.
- 업로드 형식이 아닌 파일 두 개(.jsona, .fnt)의 이름을 바꿨어요.
  Renamed two files whose types uploads do not take (.jsona, .fnt).

## 바뀐 파일 / Files

- 고친 파일 / Changed:
  - `Boot.js`
  - `Preloader.js`
  - `phaser.min.js`
- 더한 파일 / Added:
  - `assets/fnt2.txt`
  - `assets/spritesheet.json`
- 뺀 파일 / Removed:
  - `assets/fnt2.fnt`
  - `assets/spritesheet.jsona`
