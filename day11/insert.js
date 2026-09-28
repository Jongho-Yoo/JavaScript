const box = document.querySelectorAll(".box");
/* span 아메리카노, span 라떼 추가하고싶음 */
box.insertAdjacentHTML(
  "afterend",
  `
    <span>아메리카노</span>
    <span>라떼</span>
`,
);

const list = documnet.querySelectorAll("#list");

list.insertAdjacentHTML(
  "afterbegin",
  `<li class="item done" data-id="1">
        <label class="item__label">
          <input class="item__check" type="checkbox">
          <span class="item__text">${user_input}}</span>
        </label>
        <button class="item__del" type="button" aria-label="할 일 글자 삭제">✕</button>
      </li>`,
);

