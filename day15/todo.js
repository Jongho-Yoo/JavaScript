/* todo 만들기 */
/* 할 내용, 완료 여부, 데드라인 */

/* class Todo {
  #contents;
  #isdone;
  #deadline;
  constructor(contents, deadline) {
    this.#contents = contents;
    this.#isdone = false;
    this.#deadline = deadline;
  }
}

const a = new Todo("커피사기", "2026-09-19");
console.log(a);

 */

class Todo {
  #contents;
  #isdone;
  #deadline;

  constructor(contents, deadline) {
    this.#contents = contents;
    this.#isdone = false; // 기본값: 미완료
    this.#deadline = deadline;
  }

  // 외부에서 값을 읽을 수 있도록 Getter 추가
  get contents() {
    return this.#contents;
  }

  get isdone() {
    return this.#isdone;
  }

  get deadline() {
    return this.#deadline;
  }

  // 완료 상태를 토글(변경)하는 메서드
  toggleDone() {
    this.#isdone = !this.#isdone;
  }

  // 콘솔에 보기 좋게 출력하기 위한 메서드
  getInfo() {
    return `[${this.#isdone ? "완료" : "미완료"}] ${this.#contents} (기한: ${this.#deadline})`;
  }
}

// 할 일 객체들을 담을 배열
const todoList = [];

// DOM 요소 선택 (페이지가 로드된 후 실행)
document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.querySelector("#todo-input");
  const dateInput = document.querySelector("#date-input");
  const addBtn = document.querySelector("#add-btn");

  // 추가 버튼 클릭 이벤트
  addBtn.addEventListener("click", () => {
    const contents = todoInput.value;
    const deadline = dateInput.value;

    // 입력값 검증
    if (!contents) {
      alert("할 일을 입력해주세요!");
      return;
    }
    if (!deadline) {
      alert("데드라인을 선택해주세요!");
      return;
    }

    // 새로운 Todo 객체 생성 및 배열에 추가
    const newTodo = new Todo(contents, deadline);
    todoList.push(newTodo);

    // 입력창 초기화
    todoInput.value = "";
    dateInput.value = "";

    // 콘솔로 할 일 모음 나타내기
    console.clear();
    console.log("=== 현재 할 일 목록 ===");
    todoList.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo.getInfo()}`);
    });
  });
});
