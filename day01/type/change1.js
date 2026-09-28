/* 프롬프트로 유저에게
첫 번째 숫자 입력
두 번째 숫자 입력
각각 받은 뒤
두 숫자의 합을 콘솔로 나타내기! */

/* const num1 = window.prompt("첫 번째 숫자는?");
// num1 변수에 prompt로 입력받은 값을 저장
const num2 = window.prompt("두 번째 숫자는?");
// num2 변수에 prompt로 입력받은 값을 저장

console.log(Number(num1) + Number(num2));
// Number()로 num1, num2를 숫자로 변환 후 더하기 */

// console.log(a + b); ====== ab가 앞 뒤로 붙음

// const c = Number(a)
// const d = Number(b)) 로 해서 console.log(c + d) 해도 됨.

// 나이를 물어보고, 몇년생인지 맞추기!
// 몇살인가요~? :27
// 2000년생 이시군요!

/* const age = window.prompt("몇살인가요~?");
// age 변수에 prompt로 입력받은 값을 저장
const birthYear = 2026 - Number(age) - 1;
// birthYear 변수에 2027 - age를 계산하여 저장 */

/* const age = Number(window.prompt("몇살인가요~?"));
const birthYear = 2027-age;
console.log(`${birthYear}년생 이시군요!`);  도 가능! */

/* const a = 3 * 10; // 30 곱하기
const b = 3 / 10; // 0.3 나누기
const c = 3 ** 2; // 9 제곱 (3의 2승) */

/* 일본 여행 경비 원화 입력:
엔화로 얼마 나오는지 콘솔로 출력
환율은 오늘 인터넷 기준 */

const won = window.prompt("여행 경비 원화로 얼마인가요?");
const exchangeRate = 0.116164;
const yen = Number(won) * exchangeRate;
console.log(`${yen} 엔화입니다.`);
// console.log(`${Number(won) * exchangeRate} 엔화입니다.`);  도 가능!

/*  1.javascript
 -script 태그 넣어야함

2. console.log()  
- 출력

3.window.prompt("")
-입력

4. 변수
-const 별명 = 데이터

5. 데이터 타입
-문자열(string) : "문자"
-숫자(number) : 1234

 */
