/* const btn = document.querySelector("#btn");
const menu = document.querySelector("#dropdownMenu"); // 드롭다운 메뉴 선택자

btn.addEventListener("click", () => {
  menu.classList.toggle("show"); // 버튼 클릭 시 메뉴에 'show' 클래스 토글 */

const btn = document.querySelector(".dropdown");

btn.addEventListener("click", () => {
  const list = document.querySelector(".list");
  list.classList.toggle("noShow");
  list.classList.toggle("show");

  const chevron = document.querySelector("#dropdown_chevron");
  chevron.classList.toggle("down");
});
