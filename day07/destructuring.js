const fruits = ["apple", "banana", "kiwi", "melon"];

/* const one = fruits[0];
const two = fruits[1];
const three = fruits[2];
const four = fruits[3]; */

/* const [one, two] = fruits; //"apple", "banana" //배열 구조분해 할당 */

const students = [
  "오찬식",
  29,
  () => {
    console.log("돌아왔구나");
  },
  true,
  "JLPT 없음 ㅅㄱ",
];

const [one, two, three] = students; // "오찬식", 29, () => { console.log("돌아왔구나")}

console.log(one); // 오찬식
console.log(two); // 29
console.log(three); // () => { console.log("돌아왔구나")}

// `${one} ${two} ${three()}`; // "오찬식 29 돌아왔구나"
