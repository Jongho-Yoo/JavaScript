/* const fruits = ["strawberry", "mandarin", "apple", "banana"];

// 1. 각 과일의 글자 갯수로 바꾸기

const lengthFruits = fruits.map((x) => x.length);
console.log(lengthFruits);

// 2. 글자 갯수가 6개 이상이면 오이시! 아니면 스미마셍

const flavorFruits = lengthFruits.map((x) => (x >= 6 ? "오이시!" : "스미마셍"));
////const flavorFruits = fruits.map((x) => (x.length >= 6 ? "오이시!" : "스미마셍"));
console.log(flavorFruits);

// 3.스펠링 i 가 있으면 "😊" 없으면 "😂" 나타내기

const iFruits = fruits.map((x) => (x.includes("i") ? "😊" : "😂"));
console.log(iFruits);
 */

const cafe = ["americano", "latte", "tea", "Frappuccino", "ade"];

//1. i또는 o를 포함하면 글자 수로 바꾸고 아니면 대문자화 하기

const IorO = cafe.map((x) =>
  x.includes("i") || x.includes("o") ? x.length : x.toUpperCase(),
);

//2. 글자 수가 6글자 이상이면 5글자로 나타내고 아니면 그대로 나타내기

const sixOver = cafe.map((x) => (x.length >= 6 ? x.slice(0, 5) : x));

//3. t를 포함하면 true 이고 아니면 false로 나타내기

const tInclude = cafe.map((x) => (x.includes("t") ? true : false));
// const tInclude = cafe.map((x) => x.includes("t")); 이것도 가능 더 깔끔함

console.log(IorO);
console.log(sixOver);
console.log(tInclude);
