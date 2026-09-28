// const num = +window.prompt("숫자 입력");
// if (num > 0) {
//   console.log(`${num}은 0보다 큽니다.`);
// }
// console.log("프로그램 종료");

// 유저에게 나이를 입력받고, 20살 이상이면 성인이시군요!
// 프로그램 종료!

/* const age = +window.prompt("나이를 입력하세요."); // +를 붙이면 숫자로 변환
if (age >= 20) {
  console.log("성인이시군요!");
} // 입력받은 나이가 20살 이상이면 콘솔에 "성인이시군요!" 출력
else {
  console.log("미성년자시군요!"); // 입력받은 나이가 20살 미만이면 콘솔에 "미성년자시군요!" 출력
}
console.log("프로그램 종료!"); // 콘솔에 "프로그램 종료!" 출력
 */

const num = +window.prompt("숫자 입력");
if (num > 0) {
  console.log("양의 정수");
} else if (num == 0) {
  console.log("0");
} else {
  console.log("음의 정수");
}
