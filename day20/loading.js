// DOM 요소 선택
const loader = document.querySelector(".loader");
const image = document.querySelector(".image");

// 1. 2초 뒤 완료되는 Promise 생성 함수
const load = () => {
  return new Promise((success) => {
    setTimeout(() => {
      success(); // 2초 대기 완료를 알림
    }, 2000);
  });
};

// 2. Promise 실행 및 화면 상태(클래스) 전환
load().then(() => {
  loader.classList.add("hidden"); // 로딩 마크 숨김
  image.classList.remove("hidden"); // 이미지 나타냄[cite: 3]
});
