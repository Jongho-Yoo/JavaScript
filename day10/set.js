//또 타입
// string, number, boolean, undefined
// obj,arr,func,math,date, set . ,window, document, element

// 집합
const s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(1); // 중복된 값은 추가되지 않음
console.log(s); // Set(2) {1, 2, 3}
console.log(s.size); // 3

const s1 = new Set();
s1.add("쿠키");
s1.add("아이스크림");
s1.add("커피");
s1.add("아이스크림"); // 중복된 값은 추가되지 않음
console.log(s1);
console.log(s1.size); // 3

const s2 = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]); // 배열을 Set으로 변환
const newList = [...s2]; // Set을 배열로 변환
console.log(newList); // [1, 2, 3, 4, 5]
