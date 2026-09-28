/* function add(a, b, c) {
  return a + b + c;
}

const a = add(1, 2, 3); // 6 */

/* 1. x,y를 받고 x의 y제곱을 돌려주는 함수 */

function power(x, y) {
  return x ** y;
}

/* 2. 메뉴 이름과 가격을 받고 오브젝트로 돌려주는 함수 */
function menu(wname, hprice) {
  return { name: wname, price: hprice };
}

/* 3.  x,y 를 받고 더 큰 수를 돌려주는 함수 */

function bigger(x, y) {
  return x > y ? x : y;
}

/* 4. r을 받고 원의 넓이와 둘레를 오브젝트로 돌려주는 함수 */

function radius(r) {
  return { dimen: r * r * 3.14, length: 2 * r * 3.14 };
}
