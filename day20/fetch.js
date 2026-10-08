// 비동기: 오래 걸리는 작업들 [setTimeout, 서버]
// fetch() 는 Promise를 반환합니다.

// 데이터 가져오기 누르면 title들만 밑에 렌더링 해주기! 그 전에 로딩바 넣기

// fetch("https://dummyjson.com/recipes")
//   .then((v) => v.json())
//   .then((v) => console.log(v));

const btn = document.querySelector("#btn");
const loader = document.querySelector(".loader");

btn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  fetch("https://dummyjson.com/products")
    .then((v) => v.json())
    .then((v) => {
      const titles = v.products.map((x) => x.title);
      titles.forEach((x) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = x;
        document.body.append(newDiv);
      });
      loader.classList.add("hidden");
    });
});
