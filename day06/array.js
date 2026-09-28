// const arr = [2, 4, 6, 8, 10];

// const double = (x) => {
//   return x * 2;
// }; //고차 함수 설정

// /* const double((x) => x * 2); //고차 함수 설정 */

// const doubledArr = arr.map((x) => x * 2); // 함수 한 번에 설정, 출력까지

// //코드는 최대한 간결하게 작성.

// const coffee = ["아메리카노", "라떼", "모카", "프라푸치노"];
// const test = coffee.map((x, i) => `${i}: ${x}`); // i는 몇 번째인지 알려주는 인덱스
// console.log(test); // 인덱스와 함께 출력

// const students = [
//   { name: "김나단", age: 31 },
//   { name: "이민욱", age: 29 },
//   { name: "윤정은", age: 30 },
// ];

// //{no.0, name: "김나단", age:31}
// // {no.1, name: "이민욱", age:29}
// // {no.2, name: "윤정은", age:30}

// /* const std = {name: "김나단", age: 31};
// std.major = "컴퓨터공학과"; // 객체에 key 추가
// delete std.age; // 객체에 key 삭제 */

// students.map((x, i) => {
//   x.no = i;
//   return x;
// }); // no라는 key를 추가하고 0으로 초기화

// const company = [
//   { name: "씨엘제로", location: "오사카" },
//   { name: "라쿠텐", location: "도쿄" },
//   { name: "메루카리", location: "도쿄" },
// ];

// // {no:001, name:"씨엘제로" , location:"오사카"}
// // {no:002, name:"라쿠텐" , location:"도쿄"}
// // {no:003, name:"메루카리" , location:"도쿄"}

// company.map((x, i) => {
//   x.no = `00${i + 1}`; // 001, 002, 003 문자열 00에 i+1을 붙여서 001, 002, 003으로 만들어줌
//   return x;
// });

// const japanClass = [
//   { name: "A반", level: "basic", students: ["오찬식", "이민욱", "윤정은"] },
//   { name: "B반", level: "advance", students: ["김나단", "김지원", "최강현"] },
// ];

// //{no:1, name:"A반", level:"basic", students:[{"no:1, name:"오찬식"}, {no:2, name:"이민욱"}, {no:3, name:"윤정은"}]}
// //{no:2, name:"B반", level:"advance", students:[{"no:1, name:"김나단"}, {no:2, name:"김지원"}, {no:3, name:"최강현"}]}

// /* japanClass.map(x, i) =>{
//     x.no = i + 1;                                                      //no.1 , no.2
//     x.students.map((x.students.map(x1,i1)=> {
//         rerturn {name: x1, no: i1 + 1};
//     })
//     return x;} */

// const quiz2 = japanClass.map((x, i) => {
//   x.no = i + 1;
//   x.students = x.students.map((x1, i1) => {
//     return { name: x1, no: i1 + 1 };
//   });
//   return x;
// });

// console.log(quiz2);

const students = [
  {
    name: "윤정은",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["회화책,문법책,단어책"],
  },
  {
    name: "오찬식",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["히라가나,가타카나,단어책"],
  },
  {
    name: "이민욱",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["한문책,출석책,단어책"],
  },
];

/* {no:001, name: "윤정은",
itBooks:[{name: "html&css", no: 001, bookslength:8}, {name: "git&github", no: 002, bookslength:10}, {name: "javascript", no: 003, bookslength:10}],
japaneseBooks:[{name: "회화책"}, {name: "문법책"}, {name: "단어책"}]} */

const quiz3 = students.map((x, i) => {
  x.no = `00${i + 1}`; // no.001, no.002, no.003
  x.itBooks = x.itBooks.map((bookname, booksIdx) => {
    return {
      name: bookname,
      no: `00${booksIdx + 1}`,
      booklength: bookname.length,
    };
  });
  x.japaneseBooks = x.japaneseBooks.map((japbook) => {
    return { name: japbook };
  });
  return x;
});

console.log(quiz3);
