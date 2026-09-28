// truthy & falsy
// truthy: 아래 빼고 다
// false: 0, ""

// const a = Boolean(0); // false
// const b = Boolean(""); // false
// const c = Boolean(" "); // true
// const d = Boolean("0"); // true
// const e = Boolean(1); // true
// const f = Boolean(-1); // true
// const g = Boolean(null); // false
// const h = Boolean(스타벅스); // true
// const i = Boolean(메가커피); // true

// 명시적 타입캐스팅:Number(), String(), Boolean()

// 암묵적 타입캐스팅:
/* 1. 산술 연산자
+ (피연산자 중 하나 이상이 문자열일 때 문자열로 변환)
- (숫자로 변환)* (숫자로 변환)
/ (숫자로 변환)% (숫자로 변환)
** (거듭제곱, 숫자로 변환)

2. 비교 연산자== (동등 연산자)

!= (부등 연산자)
<, >, <=, >= (크기 비교 연산자도 피연산자들을 숫자로 암묵적 변환합니다.)

3. 논리 및 조건 연산자

! (NOT)
&& (AND)
|| (OR)
?? (Nullish 병합 연산자)
? : (삼항 조건 연산자) */

// ex) const test2 = +"100"; //숫자화 연산자
// const test3 = "로제" + "떡볶이" // -> "로제떡볶이" 문자열화 연산자
// const test5 = 1 + 2 + 3 + 4 + 5; // -> "15" 숫자화 연산자
// const test4 = 1 + 2 + 3 + 4 + "5"; // -> 105 문자열화 연산자
// const test6 = "1" + 2 + 3 + 4 + 5; // -> "12345" 문자열화 연산자
// const test5 = 1 + 2 + "3" + 4 + 5; // -> "3345" 문자열화 연산자
// const test5 = "1" + "2" + 3 + 4 + 5; // -> "12345" 문자열화 연산자
// const g = true && "고기"; // -> "고기"
// const h = false && "고기"; // -> false
// const i = true || "고기"; // -> true
// const j = false || "고기"; // -> "고기"

// const username = window.prompt("유저 이름 입력");
// const nickname = username || "Guest"; -> 유저 이름이 없으면 "Guest"으로 설정

// const password = +window.prompt("비밀번호 입력");
// const isLoggined = password == 1234 && true;
