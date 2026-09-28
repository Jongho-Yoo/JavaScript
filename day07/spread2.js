const test = [..."banana"]; // 문자열도 펼쳐서 배열로 만들 수 있다.
const test1 = [..."banana", ..."apple"]; // 문자열도 펼쳐서 배열로 만들 수 있다.

const fruits = [
  "apple",
  "pineapple",
  "banana",
  "peach",
  "kiwi",
  "orange",
  "mango",
  "strawberry",
];

/* aeiou 를 "😊"로 바꾸기 */
/* 😊ppl😊  */

//apple -> [a,p,p,l,e] -> [😊,p,p,l,😊] -> 😊ppl😊
fruits.map((word) =>
  [...word]
    .map((spelling) =>
      [..."aeiou"].some((vowel) => vowel == spelling) ? "😊" : spelling,
    )
    .reduce((a, c) => a + c),
);

const a1 = { name: "유희찬", age: 20 };
const a2 = { name: "김보민", gender: "female" };

const a3 = { ...a1, ...a2 }; //김보민, 20 ,female
const a4 = [1, 2, 3, 4, 5];
const a5 = [1, 2, 3, 4, 5];
const a6 = [...a4, ...a5];

const a7 = [..."kiwi"].map;
