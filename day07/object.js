/* const car = {
  name: "포르쉐",
  model: "잘몰라요",
  speed: 0,
  speedUp() {
    this.speed = this.speed + 10;
  },
  speedDown() {
    this.speed = this.speed < 10 ? 0 : this.speed - 10;
  },
  break() {
    this.speed = 0;
  },

  show() {
    console.log(`${this.name}의 속도: ${this.speed}`);
  },
};

car.speedUp();
car.speedUp();
car.speedUp();
car.show(); */

/* calc 라는 오브젝트 타입 변수 만들고 */
/* first, second 키값을 가지고 각각 유저에게 숫자를 입력 받고 */
/* plus, minus, multiply, divide 함수를 각각 정의하고 출력하는 오브젝트 타입 만들기 */

const calc = {
  first: 0, // 초기값
  second: 0, // 초기값
  getNumber() {
    this.first = +window.prompt("첫번째 숫자"); // 입력
    this.second = +window.prompt("두번째 숫자"); // 입력
  },
  plus() {
    console.log(this.first + this.second); // 더하기 함수에 console.log(a+b)로 출력
  },
  minus() {
    console.log(this.first - this.second);
  },
  multiply() {
    console.log(this.first * this.second);
  },
  square() {
    console.log(this.first ** this.second);
  },
  divide() {
    console.log(this.first / this.second);
  },
};
