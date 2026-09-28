// const age = "27";  // 문자 타입 - String
// const age1 = 27;   // 숫자 타입 - Number

// 두 타입은 더하기(+) 연산자를 사용할 때 서로 다르게 동작합니다.
// console.log(age + 1);  // "271" (문자가 이어붙여짐)
// console.log(age1 + 1); // 28    (숫자 산술 연산이 수행됨)

const age = "27"; // 문자 타입 - String
const result = age + "10"; // "2710" (문자가 이어붙여짐)

const age1 = 27; // 숫자 타입 - Number
const result1 = age1 + 10; // 37

console.log(`result: ${result}, result1: ${result1}`);
