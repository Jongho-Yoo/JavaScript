function makeCoffee(beans) {
  return beans + "산 아메리카노!";
}

function addTen(x) {
  return x + 10;
}

const a = makeCoffee("에콰도르"); // "에콰도르산 아메리카노!"
console.log(a);

const b = addTen(100);
console.log(b); // 110

/* 1.어떠한 정수를 받으면 제곱해서 돌려주는 함수 만들기 */
function xx(num) {
  return num * num;
}

const one = xx(5);
console.log(one); // 25

/* 2. 어떠한 과일 이름 받으면 "~~~ 과일 주문" 이라는 함수 만들기 */

function fruitOrder(fruit) {
  return `${fruit} 과일 주문!`;
}
const two = fruitOrder("사과");
console.log(two); // "사과 과일 주문!"

/* 3. 어떠한 학생 이름 받으면 오브젝트로 name: 이름으로 돌려주는 함수 만들기 */

function studentName(kname) {
  return { name: kname };
}

const three = studentName("홍길동");
console.log(three); // { name: '홍길동' }
