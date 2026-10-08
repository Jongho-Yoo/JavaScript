const obj = {
  name: "kim",
  age: 30,
  skill: ["JavaScript", "Java"],
};
const a = JSON.stringify(obj);
console.log(a);

//해석하기!
const b = JSON.parse('{"name":"kim","age":30,"skill":["JavaScript","Java"]}'); //문자열을 객체로 바꿔줌
console.log(b);

const c = JSON.parse();
