const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 각각에 10을 더한 새로운 배열을 만들고 싶으면
const addTen = (x) => {
  return x + 10;
};

// const newArr =((x) => x=10); 도 가능

const newArr = arr.map(addTen); // 새 배열은 원래 배열에 10더하는 함수를 넣어서 고차함수 설정
console.log(newArr); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] 새 배열 출력

// 1. 홀수면 2배 짝수면 3배
const holJjack = (x) => (x % 2 === 1 ? x * 2 : x * 3); //(함수 설정)
const holJjackArr = arr.map(holJjack); // (고차함수 설정)

//   const holJjack = arr.map((x) => (x % 2  ? x * 2 : x * 3)); 이것도 가능 더 깔끔함

console.log(holJjackArr); // 출력

// 2. 각각 자기 수의 제곱
const jegop = (x) => x ** 2; // (함수 설정)
const jegopArr = arr.map(jegop); // (고차함수 설정)

// const jegopArr = arr.map((x) => x ** 2); 이것도 가능 더 깔끔함

console.log(jegopArr); // 출력

// 3. 5의 배수만 "금요일" 바꾸기

const fivetimes = (x) => (x % 5 === 0 ? "금요일" : x); // (함수 설정)
const fivetimesArr = arr.map(fivetimes); // (고차함수 설정)

// const fivetimesArr = arr.map((x) => (x % 5 === 0 ? "금요일" : x)); // 이것도 가능 더 깔끔함

console.log(fivetimesArr); // 출력
