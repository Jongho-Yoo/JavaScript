console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-10)); // 10 절대값
console.log(Math.floor(3.9)); // 3 내림
console.log(Math.ceil(3.1)); // 4 올림
console.log(Math.round(3.5)); // 4 반올림
console.log(Math.random()); // 0~1 사이의 랜덤한 실수

//Int[정수]
// [0~9] max:9 min:0
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min; // min~max 사이의 랜덤한 정수
};
console.log(randomInt(100, 112)); // 100~112 사이의 랜덤한 정수
