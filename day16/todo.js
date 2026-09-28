// ==========================================
// 1. 상태 관리 (State)
// ==========================================
// 로컬스토리지에서 기존 할 일 목록 불러오기
let todos = JSON.parse(localStorage.getItem("todos")) || [];
// 현재 선택된 필터 탭 상태 ("all" | "active" | "done")
let currentFilter = "all";

// ==========================================
// 2. DOM 요소 선택
// ==========================================
const todayEl = document.getElementById("today");
const progressTextEl = document.getElementById("progress-text");
const progressBarEl = document.getElementById("progress-bar");

const formEl = document.getElementById("form");
const inputEl = document.getElementById("txt");
const addBtnEl = document.getElementById("add");

const filtersEl = document.getElementById("filters");
const listEl = document.getElementById("list");

const emptyEl = document.getElementById("empty");
const emptyTitleEl = document.getElementById("empty-title");
const emptySubEl = document.getElementById("empty-sub");

const clearBtnEl = document.getElementById("clear");

// ==========================================
// 3. 유틸리티 및 데이터 저장 함수
// ==========================================
// 오늘 날짜 표시 (예: 2026년 9월 22일 화요일)
function renderToday() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  };
  todayEl.textContent = now.toLocaleDateString("ko-KR", options);
}

// 로컬스토리지에 데이터 저장
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ==========================================
// 4. 메인 렌더링 함수 (Render)
// ==========================================
function render() {
  const totalCount = todos.length;
  const doneCount = todos.filter((todo) => todo.done).length;

  // 1) 헤더 진행률 & 막대 업데이트
  if (totalCount === 0) {
    progressTextEl.textContent = "할 일을 등록해 보세요";
    progressBarEl.style.width = "0%";
  } else if (totalCount === doneCount) {
    progressTextEl.textContent = "3개 다 끝냈어요".replace("3", totalCount); // 전체 개수로 동적 변환
    progressBarEl.style.width = "100%";
  } else {
    progressTextEl.textContent = `${totalCount}개 중 ${doneCount}개 끝`;
    const percent = (doneCount / totalCount) * 100;
    progressBarEl.style.width = `${percent}%`;
  }

  // 2) 탭 버튼 aria-pressed 상태 업데이트
  const filterBtns = filtersEl.querySelectorAll("button");
  filterBtns.forEach((btn) => {
    const isSelected = btn.dataset.filter === currentFilter;
    btn.setAttribute("aria-pressed", isSelected ? "true" : "false");
  });

  // 3) 필터링된 데이터 구하기
  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === "active") return !todo.done;
    if (currentFilter === "done") return todo.done;
    return true; // "all"
  });

  // 4) 목록 생성 (innerHTML safe rendering)
  listEl.innerHTML = filteredTodos
    .map((todo) => {
      const isDoneClass = todo.done ? "done" : "";
      const isChecked = todo.done ? "checked" : "";
      const safeText = escapeHTML(todo.text);

      return `
        <li class="item ${isDoneClass}" data-id="${todo.id}">
          <label class="item__label">
            <input class="item__check" type="checkbox" ${isChecked}>
            <span class="item__text">${safeText}</span>
          </label>
          <button class="item__del" type="button" aria-label="${safeText} 삭제">✕</button>
        </li>
      `;
    })
    .join("");

  // 5) 빈 화면(Empty State) 처리
  if (filteredTodos.length === 0) {
    emptyEl.removeAttribute("hidden");

    if (totalCount === 0) {
      emptyTitleEl.textContent = "아직 등록된 할 일이 없어요";
      emptySubEl.textContent = "위 입력창에 새로운 할 일을 적어보세요.";
    } else if (currentFilter === "active") {
      emptyTitleEl.textContent = "남은 할 일이 없어요!";
      emptySubEl.textContent = "모든 할 일을 완료했습니다. 멋져요! 🎉";
    } else if (currentFilter === "done") {
      emptyTitleEl.textContent = "완료한 일이 없어요";
      emptySubEl.textContent = "할 일을 완료하고 체크해 보세요.";
    }
  } else {
    emptyEl.setAttribute("hidden", "");
  }

  // 6) '끝낸 일 지우기' 버튼 활성화/비활성화
  clearBtnEl.disabled = doneCount === 0;
}

// ==========================================
// 5. 이벤트 리스너 (Events)
// ==========================================

// 입력창 입력 감지 -> 공백 체크 후 '추가' 버튼 활성화/비활성화
inputEl.addEventListener("input", () => {
  const isEmpty = inputEl.value.trim() === "";
  addBtnEl.disabled = isEmpty;
});

// 폼 제출 (Enter 키 및 추가 버튼 클릭 공통 처리)
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = inputEl.value.trim();
  if (!text) return;

  // 새로운 할 일 객체 추가
  const newTodo = {
    id: Date.now(), // 고유 ID
    text: text,
    done: false,
  };

  todos.push(newTodo);
  saveTodos();

  // 입력창 초기화 및 추가 버튼 다시 비활성화
  inputEl.value = "";
  addBtnEl.disabled = true;

  // 새 할 일 추가 시 '전체' 또는 '남은 일' 탭이 아니면 사용자 혼란 방지를 위해 '전체' 탭으로 자동 이동
  if (currentFilter === "done") {
    currentFilter = "all";
  }

  render();
  inputEl.focus(); // 입력 후 포커스 유지
});

// 탭 필터 클릭 이벤트 (이벤트 위임)
filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  currentFilter = btn.dataset.filter;
  render();
});

// 목록 내 체크박스(완료 토글) 및 삭제 버튼 클릭 이벤트 (이벤트 위임)
listEl.addEventListener("change", (e) => {
  // 체크박스 클릭 처리
  if (e.target.classList.contains("item__check")) {
    const li = e.target.closest("li");
    const id = Number(li.dataset.id); // dataset 값은 문자열이므로 숫자로 변환

    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.done = e.target.checked;
      saveTodos();
      render();
    }
  }
});

listEl.addEventListener("click", (e) => {
  // 삭제 (✕) 버튼 클릭 처리
  if (e.target.classList.contains("item__del")) {
    const li = e.target.closest("li");
    const id = Number(li.dataset.id);

    todos = todos.filter((t) => t.id !== id);
    saveTodos();
    render();
  }
});

// 완료된 항목 전체 삭제
clearBtnEl.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.done);
  saveTodos();
  render();
});

// ==========================================
// 6. 초기화
// ==========================================
renderToday();
render();
