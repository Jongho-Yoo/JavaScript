/* 비동기[웹브라우저 담당 하는 역할] */

setTimeout(() => {}, 3000); // 3초 뒤에 함수 실행
setInterval(() => {}, 1000); // 1초마다 함수 반복실행

/* 카페 주문 */

console.log("1.주문 접수");
setTimeout(() => {
  console.log("2.음식 제조");
}, 2000);
setTimeout(() => {
  console.log("3.음식 완성");
}, 3000);

/* 비동기 컨트롤 하는 문법 */
