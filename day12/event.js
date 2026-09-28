const input = document.querySelector("#input"); //id를 input으로 줬기 때문에 #input 사용
input.addEventListener("input", (e) => {
  console.log(e.target.placeholder); // placeholder 속성값 가져오기
});

const box = document.querySelector(".box");
/* box.addEventListener("mouseover", (e) => {
  console.log({ e });
  console.log(e.target.className);
}); */
