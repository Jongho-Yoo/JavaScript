/* 브라우저 오래 걸리는 작업 :[비동기]:setTimeout, setInterval*/
/* 함수의 함수를 넣어서 순서 보장 */
/* Callback Hell [2015 이전까지 이렇게 함] */

/* 기본:string, number, boolean,undefined */
/* 참조:array, object, function, math, date, promise <-> document,window,event  */

/* promise : 비동기 작업을 성공 또는 실패를 알려주는 타입 */

//const a = new Promise();
//a.then()

//Promise 타입
// 성공, 실패 매개변수로 가지는 함수 넣기!

/* const a = new Promise((success, fail) => {
  setTimeout(() => {
    success("치킨"); // 3초 뒤에 성공했을 때 실행되는 함수
  }, 3000); // 3초 뒤에 실패했을 때 실행되는 함수
}); */

//state: fulfilled / rejected/ pending     성공, 진행중, 실패
// result: ? , --, ?

/* const b = new Promise((success, fail) => {
  setTimeout(() => {
    fail("치킨"); // 실패해라
  }, 3000); // 3초 뒤에 성공했을 때 실행되는 함수
}); */

//console.log(b); // Promise { '피자' }  Promise 타입으로 출력됨

//b.then((x) => console.log(x)); // 그러면(then) 성공(success)했을 때 실행되는 함수가 실행됨

//b.catch((x) => console.log(x)); // 실패(fail)했을 때 실행되는 함수가 실행됨

// a.then((x) => console.log(x)); // 그러면(then) 성공했을 때 실행되는 함수가 실행됨

/* quiz.프로미스 타입을 이용해서 */
/* 2초 뒤에 성공 함수를 실행시켜서 "토마토" */
/* then 함수로 토마토 꿀맛! 알럿으로 출력하기 */

/* input, button 만들고 */
/* input 안의 내용을 넣고 버튼을 누르면 2초뒤에 알럿으로 input 내용 꿀맛! 출력하기 */

const content = document.querySelector("#content");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  // 클릭한 바로 그 순간 new Promise를 생성해야 2초 타이머가 지금 시작됨
  const test = new Promise((success) => {
    setTimeout(() => {
      success(content.value);
    }, 2000);
  });

  test.then((x) => alert(`${x} 꿀맛!`));
});
