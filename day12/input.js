input.addEventListener("input", (e) => {
  console.log(e.target.placeholder); // placeholder 속성값 가져오기
  const num = document.querySelector(".num");
  num.textContent = `${e.target.value.length}/100`;
});

// 2. 비밀번호 보기/숨기기 버튼 기능
const pwInput = document.querySelector("#pwInput");
const pwBtn = document.querySelector("#pwBtn");

pwBtn.addEventListener("click", () => {
  const isPassword = pwInput.type === "password";

  pwInput.type = isPassword ? "text" : "password";
  pwBtn.textContent = isPassword ? "숨기기" : "보기";
});

/*const introduce = document.querySelector("#introduce");
const introduce_count = document.querySelector("#introduce_count");
introduce.addEventListener("input", (e) => { 
  introduce_count.innerHTML = e.target.value.length;
});

const password_button = document.querySelector("#password_button");
const password_input = document.querySelector("#password_input");
password_button.addEventListener("click", (e) => {
  password_input.type = password_input.type == "password" ? "text" : "password";
  password_button.innerHTML =
    password_button.innerHTML == "보이기" ? "숨기기" : "보이기";
}); */
