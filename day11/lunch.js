// html 점메추 버튼을 만들고
// 버튼을 누르면 오늘 점심은 돈치킨입니다! 라는 알럿(windw.alert()) 나오게하기 !

const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  alert("오늘 점심은 돈치킨입니다!");
});

//사각형 만들기 버튼
// 화면에 100px * 100px 배경 빨간색 박스 생성되도록하기

const rbtn = document.querySelector("#rbtn");
rbtn.addEventListener("click", function () {
  const box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = "red";
  //box.style.cssText = "width:100px; height:100px; background-color:red"; 도 가능
  document.body.append(box);
});

//하트 색상 바꾸기 버튼
// 버튼을 누르면 하트가  ♥,빨간색상으로 바뀌도록하기 다시 누르면 원래대로  ♡ 바뀌도록하기

const heart = document.querySelector("#heart");
heart.addEventListener("click", function () {
  if (heart.style.color === "red") {
    heart.style.color = "black";
    heart.textContent = "♡";
  } else {
    heart.style.color = "red";
    heart.textContent = "♥";
  }
});

/* const heart = document.querySelector("#heart");
heart.addEventListener("click", function () {
 heart.innerHTML = heart.innerHTML == "♡" ? "♥" : "♡";
}); */

// - 0 + // - 누르면 숫자 음의 정수로 내려가고, + 누르면 숫자 양의 정수로 올라가는 버튼 만들기

const zero = document.querySelector("#zero");
zero.innerHTML = +0;

const minus = document.querySelector("#minus");
minus.addEventListener("click", function () {
  zero.innerHTML = +zero.innerHTML - 1;
});

const plus = document.querySelector("#plus");
plus.addEventListener("click", function () {
  zero.innerHTML = +zero.innerHTML + 1;
});

/* plus.addEventListener("click", function () => {
    zero.innerHTML = +zero.innerHTML + 1;
}); 

minus.addEventListener("click", function () => {
    zero.innerHTML = +zero.innerHTML - 1;
}); 
*/

// 버튼 밝게/어둡게 만들어서 누를 때마다 라이트모드/다크모드 바뀌도록하기
