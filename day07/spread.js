const students = { name: "오찬식", age: 30, name: "이민욱" }; // name: "이민욱"으로 덮어쓰기 됨 키값은 뒤에 것이 적용됨

const movie = { name: "오디세이", director: "놀란", runningTime: 180 };
const snack = { popcorn: "고소 팝콘", drink: "제로 콜라", side: "나초" };

const a = { ...movie, ...snack };

console.log(a);

const coffee = [
  { name: "아메리카노", price: 3000, shots: 2 },
  { name: "라떼", price: 3500, shots: 2 },
  { name: "연유라떼", price: 4000, shots: 2 },
];

/* coffee.map((x) => {
   return {...x, price: x.price * 2 };   // 가격 두 배로
}) */

//가격 천원 더하고 샷은 두배로 하기

coffee.map((x) => {
  return { ...x, price: x.price + 1000, shots: x.shots * 2 };
});

// return 안 쓰고 coffee.map((x) => ({ ...x, price: x.price + 1000, shots: x.shots * 2 }))
