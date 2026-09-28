class Day {
  #date;
  #type; // 'prev' (이전달), 'current' (이번달), 'next' (다음달)
  #isToday;

  constructor(date, type = "current", isToday = false) {
    this.#date = date;
    this.#type = type;
    this.#isToday = isToday;
  }

  render() {
    const btn = document.createElement("button");
    btn.classList.add("calendar__day");
    btn.textContent = this.#date;

    // 이전달/다음달 날짜는 연하게 처리하기 위한 BEM 변형 클래스
    if (this.#type !== "current") {
      btn.classList.add("calendar__day--muted");
    }

    // 오늘 날짜 표시
    if (this.#isToday) {
      btn.classList.add("calendar__day--today");
    }

    // 단일 선택 토글 이벤트
    btn.addEventListener("click", () => {
      const prevSelected = document.querySelector(".calendar__day--selected");
      if (prevSelected && prevSelected !== btn) {
        prevSelected.classList.remove("calendar__day--selected");
      }
      btn.classList.toggle("calendar__day--selected");
    });

    return btn;
  }
}

class Calendar {
  #year;
  #month;

  constructor(year, month) {
    this.#year = year;
    this.#month = month; // 1 ~ 12
  }

  render() {
    const calendarEl = document.querySelector(".calendar");
    if (!calendarEl) return;
    calendarEl.innerHTML = "";

    const now = new Date();
    const isCurrentMonthReal =
      now.getFullYear() === this.#year && now.getMonth() + 1 === this.#month;

    // 1. 상단 요일 헤더 그리기 (일~토)
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    const headerGrid = document.createElement("div");
    headerGrid.classList.add("calendar__header");

    weekdays.forEach((dayText) => {
      const dayHeader = document.createElement("div");
      dayHeader.classList.add("calendar__weekday");
      dayHeader.textContent = dayText;
      headerGrid.appendChild(dayHeader);
    });
    calendarEl.appendChild(headerGrid);

    // 2. 날짜 그리드 생성
    const bodyGrid = document.createElement("div");
    bodyGrid.classList.add("calendar__body");

    // 이번 달의 1일 요일 & 마지막 날짜 계산
    const startDayIndex = new Date(this.#year, this.#month - 1, 1).getDay(); // 9월 1일 = 화(2)
    const totalDays = new Date(this.#year, this.#month, 0).getDate(); // 30일
    const prevMonthLastDate = new Date(
      this.#year,
      this.#month - 1,
      0,
    ).getDate(); // 8월 마지막날 (31일)

    // ① 이전 달 날짜 채우기 (연한 색)
    for (let i = startDayIndex - 1; i >= 0; i--) {
      const prevDate = prevMonthLastDate - i;
      const dayObj = new Day(prevDate, "prev");
      bodyGrid.appendChild(dayObj.render());
    }

    // ② 이번 달 날짜 채우기
    for (let d = 1; d <= totalDays; d++) {
      const isToday = isCurrentMonthReal && d === now.getDate();
      const dayObj = new Day(d, "current", isToday);
      bodyGrid.appendChild(dayObj.render());
    }

    // ③ 다음 달 날짜 채우기 (총 35개 또는 42개 칸 맞추기)
    const totalRendered = startDayIndex + totalDays;
    const nextDaysNeeded = (7 - (totalRendered % 7)) % 7;
    for (let n = 1; n <= nextDaysNeeded; n++) {
      const dayObj = new Day(n, "next");
      bodyGrid.appendChild(dayObj.render());
    }

    calendarEl.appendChild(bodyGrid);
  }
}

// 2026년 9월 달력 실행
document.addEventListener("DOMContentLoaded", () => {
  const calendar = new Calendar(2026, 9);
  calendar.render();
});
