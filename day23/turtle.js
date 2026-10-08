// 반응속도 테스트  //최고 ~~~ms

// 클릭해서 시작(시작만- violet)
// 기다려( 클릭하면-red) -- 2s~5s 랜덤
// 너무 빨랐음!(red일때 클릭-yellow)
// 지금! (green)
// ~~ms (green일때 클릭 blue)

/* 조건
판을 누르면 빨강이 되고, 2~5초 중 랜덤으로 기다렸다가 초록이 된다
초록일 때 누르면 걸린 시간(ms) 을 보여준다
빨강일 때 누르면 부정출발 — 그리고 그 뒤로 초록이 뜨면 안 된다
최고 기록(가장 짧은 시간)을 계속 들고 있는다
지금 상태는 변수 하나로 들고, 판 색은 클래스로 바꾼다 */

const screen = document.querySelector("#screen");
const message = document.querySelector("#message");
const subMessage = document.querySelector("#sub-message");
const maxRecordEl = document.querySelector("#max-record");

let startTime; // 초록색이 된 시각
let endTime; // 클릭한 시각
let timeoutId = null; // 타이머 번호표 (clearTimeout 취소용)
let maxRecord = null; // 최고 기록 (ms)

screen.addEventListener("click", () => {
  // 1. [violet -> red] 클릭해서 시작 -> 대기 상태
  if (
    screen.classList.contains("violet") ||
    screen.classList.contains("yellow") ||
    screen.classList.contains("blue")
  ) {
    screen.className = "red";
    message.textContent = "기다려...";
    subMessage.textContent = "초록이 되면 클릭하세요";

    // 2초 ~ 5초(2000ms ~ 5000ms) 사이의 랜덤 대기 시간 설정
    const randomDelay = Math.floor(Math.random() * 3000) + 2000;

    // 2. [red -> green] 2~5초 뒤 초록 화면으로 변경
    timeoutId = setTimeout(() => {
      screen.className = "green";
      message.textContent = "지금!!";
      startTime = Date.now(); // 초록색이 된 시점
    }, randomDelay);
  }

  // 3. [red일 때 클릭] 너무 빨랐음! -> 부정클릭 처리
  else if (screen.classList.contains("red")) {
    clearTimeout(timeoutId); // 초록색으로 변하는 예약(번호표)을 찢
    screen.className = "yellow";
    message.textContent = "너무 빨랐음!";
    subMessage.textContent = "부정 출발! (클릭해서 다시 시작)";
  }

  // 4. green ! 반응속도 측정
  else if (screen.classList.contains("green")) {
    endTime = Date.now(); // 클릭한 시각 기록
    const resultTime = endTime - startTime; // 걸린 시간(ms) 계산

    let grade = "";
    if (resultTime < 180) {
      grade = "페이커? 👑";
    } else if (resultTime <= 220) {
      grade = "빠름! 🐇";
    } else if (resultTime <= 300) {
      grade = "보통.. 🚶 ";
    } else if (resultTime <= 400) {
      grade = "달팽이 🐌";
    } else {
      grade = "거북이? 🐢";
    }

    // 최고 기록 업데이트 (기존 기록이 없거나 새로 잰 기록이 더 짧은 경우)
    if (!maxRecord || resultTime < maxRecord) {
      maxRecord = resultTime;
      maxRecordEl.textContent = `최고 ${maxRecord}ms`;
    } // 만약 maxRecord가 없거나, 새로 잰 기록이 더 짧으면 최고 기록 갱신

    screen.className = "blue";
    message.textContent = `${resultTime}ms`;
    subMessage.textContent = `${grade} 클릭해서 다시`;
  }
});
