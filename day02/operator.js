/* 연산자가 무엇? */
/* 토큰(상징) */

/* 산술 연산자 */

// const a1 = 1+2; 덧셈
// const a2 = 1-2; 뺄셈
// const a3 = 1*3; 곱셈
// const a4 = 1/2; 나눗셈
// const a5 = 2**3; 제곱
// const a6 = 4%3; 나머지 4나누기3의 나머지는 1

/* 대입 연산자 */

// const b1 = true; // = 대입연산자
// const b2 = "화요일"; // = 대입연산자

/* 비교 연산자 (>, <, >=, <=, ==(same), !=(not same)) [boolean저장됨] */

// const c1 = 3>5; // false
// const c2 = 3<5; // true
// const c3 = 3>=5; // false
// const c4 = 1<=5; // true
// const c5 = 1==5; // false
// const c6 = 1!=5; // true

/* 논리 연산자 (&&[and], ||[or], ![not]) [boolean저장됨] */

/* &&[and]:하나라도 false면 모두 false */
// const d1 = 5>3 && 2>1 && 1 !=1;  // false

/* ||[or]: 하나라도 true면 모두 true */
// const d2 = true || false; // true

/* ![not]: true를 false로, false를 true로 변경 */
// const d3 = !true; // false

// /* 코딩 수학 필요? */
// /* 드모르간 법칙  */
// const d4 = !(5<=3) || !(2<=1); // true
// const d5 = 5>3 && 2>1; // true

/* 삼항 연산자 (조건 ? 값1 : 값2) */
// const e1 = 5 > 3 ? "로제" : "마라"; -> 5>3이 true이므로 "로제"가 출력됨
// const e2 = 5 < 3 ? "N1" : "N2"; -> 5<3이 false이므로 "N2"가 출력됨
// const e3 = "가나다" === "마바사" ? "같다" : "다르다"; -> false이므로 "다르다"가 출력됨
