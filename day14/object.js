const menu = {
  name: "americano",
  price: 3000,
  kcal: 5,
  shots: 2,
};

const a = Object(); // 오브젝트 만들기
const b = Object.keys(menu); // ["name", "price", "kcal", "shots"]  = 키 값만 어레이로
const c = Object.values(menu); // ["americano", 3000, 5, 2] = 밸류 값만 어레이로
const d = Object.entries(menu); // ["name", "americano"], ["price", 3000]
console.log(d);
