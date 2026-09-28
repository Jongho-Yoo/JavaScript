// 1.유저에게 나이를 물어보고, 20살 미만이면
// 콘솔에 미성년자 아니면 성인 나오기!

// 2. 유저에게 정수(숫자)를 입력받고,
// 콘솔에 양의 정수인지 0인지 음의 정수인지 나타내기 !
// ex) 10 -> 양의 정수, 0 -> 0, -10 -> 음의 정수

// 3. 유저에게 정수(숫자)를 입력받고
// 콘솔에 홀수인지 짝수인지 나타내기
// ex) 10 -> 짝수, 11 -> 홀수

const age = Number(window.prompt("나이가 몇 살인가요?"));
console.log(age < 20 ? "미성년자" : "성인");

// const age = Number(window.prompt("나이가 몇 살인가요?"));
// const result = age < 20 ? "미성년자" : "성인";
// console.log(`귀하는 ${result}입니다.`); // 템플릿 리터럴

const number = Number(window.prompt("정수(숫자)를 입력해주세요"));
console.log(number > 0 ? "양의 정수" : number < 0 ? "음의 정수" : "0");

// const number2 = Number(window.prompt("정수(숫자)를 입력해주세요"));
// const result2 = number2 > 0 ? "양의 정수" : number2 < 0 ? "음의 정수" : "0";
// console.log(`입력하신 숫자는 ${result2}입니다.`);

const number2 = Number(window.prompt("정수(숫자)를 입력해주세요(0제외)"));
console.log(number2 % 2 == 0 ? "짝수" : "홀수");

// const num1 = Number(window.prompt("정수(숫자)를 입력해주세요(0제외)"));
// const result3 = num1 % 2 === 0 ? "짝수" : "홀수";
// console.log(`입력하신 숫자는 ${result3}입니다.`);
