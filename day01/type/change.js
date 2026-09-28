// 문자 타입(string) 숫자타입(number)

/* Number() 함수는 문자열을 숫자로 변환합니다. */
const a = Number("100"); // a는 숫자 100이 담김
const b = Number("123"); // b는 숫자 123이 담김

console.log(a + b); // 223

// String() 함수는 숫자를 문자열로 변환합니다.

const c = String(100); // c는 문자열 "100"이 담김
const d = String(4); // d는 문자열 "4"이 담김

console.log(c + d); // "1004" 문자열로 연결됨 "100"+"4" = "1004"
