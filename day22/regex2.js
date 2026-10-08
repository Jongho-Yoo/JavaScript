const a = /ab+c/; // +: 1개 이상 반복, ab, abb, abbb, abbbb ... 검색
a.test("ab"); // false
a.test("abc"); // true
a.test("abbc"); // true

const a1 = /ab?c/; // ?가 있거나 없거나
a1.test("ac"); // true
a1.test("abc"); // true
a1.test("abbc"); // false

const a2 = /ab{2}c/; // {n}: n개 반복, ab, abb, abbb, abbbb ... 검색
a2.test("ac"); // false
a2.test("abc"); // false
a2.test("abbc"); // true
a2.test("abbbc"); // true

const a3 = /ab{2,5}c/; // {n,m}: n개 이상 m개 이하 반복, ab, abb, abbb, abbbb ... 검색
a3.test("ac"); // false
a3.test("abc"); // false
a3.test("abbc"); // true
a3.test("abbbc"); // true
a3.test("abbbbc"); // true
a3.test("abbbbbc"); // true
a3.test("abbbbbbc"); // false

const a5 = /[0-9]/; // 0 ~ 9
const a6 = /[\d]/; // digit[숫자]
const a7 = /[a-z]/; // 소문자
const a8 = /[A-Z]/; // 대문자
const a9 = /[a-zA-Z]/; // 소문자 + 대문자
const a10 = /[가-힣]/; // 한글

const phone = /^01[01679]\d{4}\d{4}/; // 01로 시작하고, 0,1,6,7,9 중 하나가 나오고,뒤에 숫자 4개가 나오고, 그 뒤에 숫자 4개

/* 2026-10-06 정규표현식 [2000-01-01~ 2999-12-31] */

const date = /^2\d{3}-[0[1-9]|1[0-2]-(0[1-9]|1[0-9]|2[0-9]|3[01])$/; // 2000~2999년 - 01~12월 - 01~31일
