/* 비동기 컨트롤 문법 */
/* 카페 주문 순서 */
/* 주문 -> 결제 -> 제조 -> 수령 */

const orderCoffee = (step) => {
  setTimeout(() => {
    console.log(`${menu} 주문 완료`);
    step(menu);
  }, 1000);
};

const payCoffee = (step) => {
  setTimeout(() => {
    console.log(`결제 완료`);
    step();
  }, 2000);
};

const makeCoffee = (step) => {
  setTimeout(() => {
    console.log(`제조 완료`);
    step();
  }, 5000);
};
const takeoutCoffee = (step) => {
  setTimeout(() => {
    console.log(`수령 완료`);
    step();
  }, 2000);
};

/* 비동기 컨트롤 */
orderCoffee("아메리카노", () => {
  payCoffee("아메리카노", () => {
    makeCoffee("아메리카노", () => {
      takeoutCoffee("아메리카노");
    });
  });
});
