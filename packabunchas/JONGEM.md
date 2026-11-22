# Packabunchas

JonGem(https://jongem.com)이 서비스하는 Packabunchas의 소스예요. 원작의 고정된 커밋에 JonGem의 변경을 적용한 전체 트리예요.

The source of Packabunchas as JonGem (https://jongem.com) serves it: the original at a pinned commit with JonGem's changes applied.

- 원작 / Original: https://github.com/js13kGames/packabunchas/tree/0b6c974954bbbff0a487ac87b36158a349a68afb
- 만든 사람 / Author: Mattia Fortunati
- 라이선스 / License: MIT (`LICENSE`)
- 버전 / Version: packabunchas-1 (https://github.com/diominor/jongem-game-sources/tree/packabunchas-1/packabunchas)

## JonGem이 고친 것 / What JonGem changed

- 격리된 칸에서 localStorage를 못 써서 게임이 멈추지 않게 저장 두 함수를 try로 감쌌어요. 진행은 페이지를 닫으면 사라져요.
  Wrapped the two save functions in try, so the game does not stop where localStorage is blocked. Progress ends with the page.

## 바뀐 파일 / Files

- 고친 파일 / Changed:
  - `game.js`
