// 정규표현식 [(string 상위호환) == 문자 패턴 찾기]

// 010 ????????
// const phone
// 010-1234-5678
// email
// alekkadskokzocm@domain.net/com/ai/io/jp

/* const a = new RegExp(); // 정규표현식 객체 생성 */
/* const a = /abc/; // 정규표현식 리터럴 생성 */

/* const a = /패턴/플래그 */
const b = /abc/g; // g: global, 전체 검색
const c = /abc/i; // i: ignore case, 대소문자 구분 없이 검색
const d = /abc/m; // m: multiline, 여러 줄에서 검색

console.log(b.test("abcdef")); // true
console.log(c.test("ABCDEF")); // true
console.log(d.test("abc\ndef")); // true
console.log(b.test("qwer")); // false

const e = /^abc/; // ^: 시작, abc로 시작하는 문자열 검색
const f = /abc$/; // $: 끝, abc로 끝나는 문자열 검색

console.log(e.test("qwerabc")); // false
console.log(e.test("abcqwer")); // true
console.log(f.test("qwerabc")); // true
console.log(f.test("abcqwer")); // false

// 우리나라 휴대폰 전화 검증
const phone = /^010/;

//png 파일 검증
const pngCheck = /\.png$/; // \. : .을 문자로 인식, png로 끝나는 문자열 검색
console.log(png.test("image.png")); // true
