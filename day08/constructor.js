// 타입캐스팅 & 생성자함수
// 기본 타입 생성자 함수 잘 안 씀
const a = String(10); // "10"
const b = Boolean(10); // true
const c = Number("10"); // 10
const d = Object(10); // [Number: 10] 구문법
const e = Array(100)
  .fill(0)
  .map((v, i) => i + 1); // [1,2,3,...,100]

e.forEach((v) => {}); // 반복문 돌면서 v에 1~100까지 들어감 훑기

console.log({ a, b, c, d, e });
