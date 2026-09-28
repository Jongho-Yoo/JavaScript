/* 일반 함수 [오래된 문법] */
function add(x, y) {
  return x + y;
}

/* 화살표 함수 [최신 문법] */
const subtract = (x, y) => {
  return x - y;
};

/* 1. a,b,c를 입력받고 배열로 돌려주기 [a,b,c]    */
const ar = (a, b, c) => {
  return [a, b, c];
};

/* 2. x,y를 입력받고 합,차,곱,나누기,제곱을 오브젝트로 돌려주기  */

const ca = (x, y) => {
  return { hab: x + y, cha: x - y, gob: x * y, na: x / y, jegob: x ** y };
};

const giveTen = () => {
  return 10;
};

const coin = (x) => {
  console.log("꺼억");
};
