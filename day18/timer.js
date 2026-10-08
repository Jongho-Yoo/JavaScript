console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

setTimeout(() => {
  console.log("연휴 개짧음");
}, 3000); // 3초 뒤에 연휴 개짧음 함수 실행

// 동기 vs 비동기 [synchronous vs asynchronous]
// 동기: 코드가 순차적으로 실행됨
// 비동기: 코드가 동시에 실행됨
// 비동기[async]: 시간초 재는거, 이벤트 등록, 네트워크 통해서 데이터 가져오기
