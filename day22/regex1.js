const a = /a[bd]c/; //abc or adc 찾기
a.test("abc"); // true
a.test("adc"); // true
a.test("aec"); // false

const a1 = /a[a-z]c/; // a?c 찾기
a1.test("abc"); // true
a1.test("adc"); // true
a1.test("aec"); // true
a1.test("a1c"); // false

const a2 = /a[^b]c/; // b가 아닌 a?c 찾기
a2.test("abc"); // false
a2.test("adc"); // true

const a3 = /a.c/; // a랑 c 사이에 어떤 문자든 1개가 들어간 a?c 찾기
a3.test("abc"); // true
a3.test("adc"); // true
a3.test("a c"); // true
a3.test("a1c"); // true
a3.test("a창c"); // true
a3.test("ac"); // false
a3.test("abbc"); // false

const an = /a[1-9]c/; // a?c 찾기
an.test("a1c"); // true
an.test("a2c"); // true
an.test("a0c"); // false
