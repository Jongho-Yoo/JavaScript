const a = Array.from("abcdefg"); // 구문법
console.log(a);

const b = [..."abcdefg"]; // 신문법
console.log(b);

const c = Array.from(document.querySelectorAll("li")); // 구문법
console.log(c);

const d = [...document.querySelectorAll("li")]; // 신문법
console.log(d);

Object(); // 오브젝트 만들어라
Object.keys(); // 오브젝트 관련 함수
Array(); // 배열 만들어라
Array.from(); // 배열 관련 함수
String(); // 문자 만들어라
