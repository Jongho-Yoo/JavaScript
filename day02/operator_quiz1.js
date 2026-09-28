// 1. 버스 요금 계산기
// 유저에게 나이를 물어보고, 버스요금도 입력받아서 결과값 나타내기
// 7살 이하이면 -> 무료
// 8살 이상 ~ 13살 이하 -> 450원
// 8~19살이면 30% 할인
// 65세 이상이면 30% 할인
// 나머지 -> 100%임

/* 정답 // const age = Number(window.prompt("나이가 몇 살인가요?"));
// const bus_fee = Number(window.prompt("버스 요금은 얼마인가요?"));

// const isGetfree = age <= 7;
// const isGet70percent = (age >= 8 && age <= 19;) || (age >= 65);
// const discount = isGetFree ? 0 : isGet70percent ? 0.7 : 1;
// console.log(`나이: ${age} 버스요금: ${bus_fee * discount}원입니다.`);
 */

const age = Number(window.prompt("나이가 몇 살인가요?"));
const result1 =
  age <= 7
    ? "무료"
    : age >= 8 && age <= 13
      ? "450원"
      : age >= 14 && age <= 19
        ? "30% 할인"
        : age >= 65
          ? "30% 할인"
          : "요금  100%";
console.log(`귀하는 ${result1}입니다.`);

// 2. 사용자에게 10000~ 99999 사이 숫자를 입력받고
// 각 자리의 합 나타내기, 단 위의 수를 벗어나면 오류 ! 나타내기
// ex) 12345 -> 1+2+3+4+5 = 15 , 94372=> 9+4+3+7+2 = 25

const number = Number(window.prompt("10000~99999 사이 숫자를 입력해주세요"));

const sum =
  (number - (number % 10000)) / 10000 +
  ((number % 10000) - (number % 1000)) / 1000 +
  ((number % 1000) - (number % 100)) / 100 +
  ((number % 100) - (number % 10)) / 10 +
  (number % 10);

console.log(
  number >= 10000 && number <= 99999
    ? `${number}의 각 자리의 합은 ${sum}입니다.`
    : "오류!",
);

/* 정답
const num = Number(window.prompt("10000~99999 사이 숫자를 입력해주세요"));

const isValid = num >= 10000 && num <= 99999;

const one = num % 10;
const ten = ((num -one *1) %100 / 10);
const hundred = ((num - (ten * 10 + one * 1)) % 1000) / 100;
const thousand = ((num - (hundred * 100 + ten * 10 + one * 1)) % 10000) / 1000;
const ten_thousand =    ((num - (thousand * 1000 + hundred * 100 + ten * 10 + one * 1)) % 100000) / 10000;

console.log(
  isValid
    ? `${num}의 각 자리의 합은 ${one + ten + hundred + thousand + ten_thousand}입니다.` 
    : "오류!",
);
*/
