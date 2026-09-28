const theater = new CinemaMap();

try {
  // 정상 예약 등록
  theater.setSeat("A", 6, "X");
  theater.setSeat("A", 7, "X");
  theater.setSeat("A", 8, "X");
  theater.setSeat("B", 5, "X");

  // 예외 케이스 1: 이미 예약된 좌석 재예약 시도
  theater.setSeat("A", 6, "X"); // 💥 Error 발생: 이미 예약된 좌석입니다.

  // 예외 케이스 2: 범위 벗어난 좌석 지정
  // theater.setSeat("Z", 30, "X"); // 💥 Error 발생: 존재하지 않는 좌석입니다.
} catch (error) {
  console.error(error.message);
}

// 좌석표 출력
theater.render();
