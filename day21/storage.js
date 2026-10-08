/* localStorage.setItem("coffee", { name: "아메리카노", price: 2500, shots: 2 }); //객체를 저장하려고 하면 [object Object]로 저장됨 제대로 나타내려면 JSON.stringify()를 사용해야 함
 */

/* bread 마들렌 3000 250 */

/* localStorage.setItem(
  "bread",
  JSON.stringify({ name: "마들렌", price: 3000, Kcal: 250 }),
); // 영구 저장임! */

/* const data = localStorage.getItem("bread"); //문자열로 가져옴
console.log(data);
 */
/* 타입 종류 알려주는 연산자: typeof */

const data = localStorage.getItem("bread"); //문자열로 가져옴
const obj = JSON.parse(data); //문자열을 객체로 바꿔줌
console.log(obj);
