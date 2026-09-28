const banapresso = [
  {
    name: "아메리카노",
    price: 2000,
    shots: 2,
    kcal: 1,
  },
  {
    name: "크리미라떼",
    price: 3500,
    shots: 2,
    kcal: 200,
  },
  { name: "소금빵", price: 2000, kcal: 250 },
  { name: "피스타치오라떼", price: 4000, kcal: 300 },
];
/* 1.가을 이벤트로 인해서, 각 가격 10% 할인된 데이터로 출력하기 */

//x.price = x.price * 0.9; // 이렇게 하면 원본 배열이 바뀌어버림 그래서 새로운 배열을 만들어야함
//return x; // 원본 배열을 바꾸지 않고 새로운 배열을 만들어서 출력하기 위해 return x;를 넣어줌
//const FallEvent = x.price = x.price * 0.9;
const quiz1 = banapresso.map((x) => {
  x.price = x.price * 0.9;
  return x;
});
console.log(quiz1);

/* 2. 우유 이슈로 인해서, 라떼 품목들은 각 20% 금액 인상된 데이터로 출력하기 */
const quiz2 = banapresso.map((x) => {
  if (x.name.includes("라떼")) {
    x.price = x.price * 1.2;
  }
  return x;
});
console.log(quiz2);

/* 3. 빵 이슈로 인해서, 빵 품목들은 가격 절반으로 깎이고, 칼로리 100 추가하기 */
const quiz3 = banapresso.map((x) => {
  if (x.name.includes("빵")) {
    x.price = x.price * 0.5;
    x.kcal = x.kcal + 100;
  }
  return x;
});
console.log(quiz3);

/* 4. 신메뉴 "민트라떼" 가격 5000 샷 2 칼로리 200 추가된 데이터로 출력하기 */

const quiz4 = banapresso.push({
  name: "민트라떼",
  price: 5000,
  shots: 2,
  kcal: 200,
});
console.log(banapresso);
