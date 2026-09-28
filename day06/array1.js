/* map => 안에 요소들을 바꿔줘! */

const arr = [1, 3, 5, 7, 9, 11];

const a1 = arr.filter((x) => x > 6); // 5보다 큰 값만 반환 ... [7, 9, 11]

//3이상 10이하만 살리기
//3의 배수만 살리기
//0번째,1번째,2번째 순서만 살리기

const quiz1 = arr.filter((x) => x >= 3 && x <= 10); //3이상 10이하만 살리기

console.log(quiz1); // [3, 5, 7, 9]

const quiz2 = arr.filter((x) => x % 3 === 0); //3의 배수만 살리기

console.log(quiz2); // [3, 9]

const quiz3 = arr.filter((x, i) => i < 3); //0번째,1번째,2번째 순서만 살리기

console.log(quiz3); // [1, 3, 5]

const fruits = ["apple", "pineapple", "banana", "kiwi", "melon", "mango"];

/* 1. 문자 길이 6글자 이상만 살리기 */

/* 2. 문자에 e 들어간 과일만 살리고 모두 대문자로 변경 */

const quiz4 = fruits.filter((x) => x.length >= 6); //1. 문자 길이 6글자 이상만 살리기

console.log(quiz4); // [pineapple, banana]

const quiz5 = fruits.filter((x) => x.includes("e")).map((x) => x.toUpperCase());
//2. 문자에 e 들어간 과일만 살리고 모두 대문자로 변경 //filter - includes로 걸러내고 .map - toUpperCase()으로 대문자로 변경

console.log(quiz5); // [APPLE, PINEAPPLE, MELON]

const students = [
  { name: "윤정은", age: 30, mbti: "ENFP" },
  { name: "오찬식", age: 29, mbti: "ESTJ" },
  { name: "이민욱", age: 26, mbti: "ISFJ" },
  { name: "오재희", age: 27, mbti: "ISTP" },
];

//1. 나이가 29세 이상인 학생만 살리고, birthyears(년생) 추가하기

//2. mbti가 I로 시작하는 학생만 살리고, tendency: "내향적" 추가하기

const quiz6 = students
  .filter((x) => x.age >= 29)
  .map((x) => {
    x.birthyears = 2027 - x.age;
    return x;
  }); // 29세 이상인 학생만 살리고, birthyears(년생) 추가하기

console.log(quiz6); // {name: "윤정은", age:30, mbti:"ENFP", birthyears: 1997}, {name: "오찬식", age:29, mbti:"ESTJ", birthyears: 1998}

const quiz7 = students
  .filter((x) => x.mbti.includes("I"))
  .map((x) => {
    x.tendency = "내향적";
    return x;
  }); // mbti가 I로 시작하는 학생만 살리고, tendency: "내향적" 추가하기

// x.mbti[0] == "I" // mbti가 I로 시작하는 학생.

console.log(quiz7); // {name: "이민욱", age:26, mbti:"ISFJ", tendency: "내향적"}, {name: "오재희", age:27, mbti:"ISTP", tendency: "내향적"}

const fruit = "apple";
fruit[0]; // a
fruit[4]; // e
