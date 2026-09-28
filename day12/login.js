const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const agreeCheckbox = document.getElementById("agree");
const loginBtn = document.getElementById("loginBtn");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const agreeError = document.getElementById("agreeError");

loginBtn.addEventListener("click", () => {
  // 1. 이메일 검사 ('@' 미포함 시 에러)
  const isEmailValid = emailInput.value.includes("@");
  emailError.classList.toggle("active", !isEmailValid);
  emailInput.classList.toggle("input_error", !isEmailValid);

  // 2. 비밀번호 검사 (8자 미만 시 에러)
  const isPasswordValid = passwordInput.value.length >= 8;
  passwordError.classList.toggle("active", !isPasswordValid);
  passwordInput.classList.toggle("input_error", !isPasswordValid);

  // 3. 약관 동의 검사 (미체크 시 에러)
  const isAgreeValid = agreeCheckbox.checked;
  agreeError.classList.toggle("active", !isAgreeValid);

  // 삼항 연산자로 최종 결과 처리
  isEmailValid && isPasswordValid && isAgreeValid
    ? alert("로그인 성공!")
    : console.log("입력 정보를 확인해주세요.");
});
