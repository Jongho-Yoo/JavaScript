// 정사각형 한 변의 길이는?
// 정사각형의 넓이는 ? 이고 , 둘레는 ? 입니다.

// 원의 반지름의 길이는?
// 원의 넓이는 ? 이고 , 둘레는 ? 입니다.

// 정삼각형의 밑변과 높이는?
// 정삼각형의 넓이는 ? 이고 , 둘레는 ? 입니다.

// 지금 몇분인가요?
// 물어보고 초 단위로 변환하기

const side = window.prompt("정사각형 한 변의 길이는?");
// -> 질문 창에 변수 설정
const radius = window.prompt("원의 반지름의 길이는?");
const base = window.prompt("정삼각형 밑변의 길이는?");
const height = window.prompt("정삼각형 높이의 길이는?");
const minutes = window.prompt("몇 분?");

console.log(`정사각형의 넓이는 ${side * side}이고 둘레는 ${4 * side}입니다.`);
// 변수에 공식을 적용하여 출력
console.log(
  `원의 넓이는 ${3.14 * radius * radius}이고 둘레는 ${2 * 3.14 * radius}입니다.`,
);
console.log(
  `정삼각형의 넓이는 ${0.5 * base * height}이고 둘레는 ${3 * base}입니다.`,
);
console.log(`${minutes}분은 ${60 * minutes}초입니다.`);

/* 정답 */
// const side = Number(window.prompt("정사각형 한 변의 길이는?"));
// const radius = Number(window.prompt("원의 반지름의 길이는?"));
// const base = Number(window.prompt("정삼각형 밑변의 길이는?"));
// const height = Number(window.prompt("정삼각형 높이의 길이는?"));
// const minutes = Number(window.prompt("몇 분?"));

// console.log(`정사각형의 넓이는 ${side * side}이고 둘레는 ${4 * side}입니다.`);

// console.log(
//   `원의 넓이는 ${3.14 * radius * radius}이고 둘레는 ${2 * 3.14 * radius}입니다.`,
// );

// console.log(
//   `정삼각형의 넓이는 ${0.5 * base * height}이고 둘레는 ${3 * base}입니다.`,
// );

// console.log(`${minutes}분은 ${60 * minutes}초입니다.`);

// 1.input & output
// 2.variable
// 3.type: string, number
// 4.type-casting:문자화,숫자화
