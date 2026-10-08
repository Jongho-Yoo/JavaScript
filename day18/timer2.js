/* setTimeout(() => {
  console.log("연휴 개짧음");
}, 3000); // 3초 뒤에 연휴 개짧음 함수 실행 */

/* setInterval(() => {
  console.log("JLPT 69일 남음");
}, 1000); // 1초마다 JLPT 69일 남음 함수 실행 */

const time = document.querySelector("#time");
time.innerHTML = new Date().toLocaleTimeString();
setInterval(() => {
  time.innerHTML = new Date().toLocaleTimeString();
}, 1000);
