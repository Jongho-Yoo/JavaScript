// 헬로우 버튼을 누르면 3초 뒤에 알럿으로 하이! 라는 기능 만들기

// 현재 시간 버튼을 누르면 5초 뒤에 콘솔로 현재 시간 나타내는 기능 만들기!

const helloBtn = document.querySelector("#hello"); // 버튼 생성
helloBtn.addEventListener("click", () => {
  setTimeout(() => {
    alert("하이!"); // 3초 뒤에 알럿으로 하이! 출력
  }, 3000);
});

const timeBtn = document.querySelector("#now"); // 버튼 생성
timeBtn.addEventListener("click", () => {
  setTimeout(() => {
    const now = new Date(); // 현재 시간 가져오기
    console.log(
      `현재 시간은 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초 입니다.`,
    );
  }, 5000); // 5초 뒤에 콘솔로 현재 시간 출력
});

// createElement: HTML 요소를 생성
// addEventListener: 이벤트 생성
//setTimeout: 일정 시간 뒤에 {원하는 것},함수 실행
//document.body.appendChild: body에 요소 추가

//toIOSString: 시간을 문자열로 변환 (영국 기준 시간)
