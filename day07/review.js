const macdonald = [
  {
    name: "빅맥",
    price: 5000,
    kcal: 600,
    ingredients: ["bread", "lettuce", "tomato", "meat"],
  },
  { name: "콜라", price: 2000, kcal: 100, ingredients: ["soda"] },
  {
    name: "프렌치프라이",
    price: 3000,
    kcal: 300,
    ingredients: ["potato", "oil"],
  },
  {
    name: "프렌치프라이",
    price: 4500,
    kcal: 400,
    ingredients: ["bread", "lettuce", "tomato", "chicken"],
  },
];

/* 1. 맥도날드 전체 총 칼로리 구하기 */
/* 2. 칼로리 500 이하 제품 중에서 가격 총 합 구하기 */

const totalKcal = macdonald.map((x) => x.kcal).reduce((a, c) => a + c);

console.log(totalKcal); // 1400

const under500 = macdonald
  .filter((x) => x.kcal <= 500)
  .map((x) => x.price)
  .reduce((a, c) => a + c);

console.log(under500); // 9500
