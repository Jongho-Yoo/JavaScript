const input = document.querySelector("#input");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const todolist = document.querySelector("#todolist");

const newData = localStorage.getItem("todos");
if (newData != null) {
  newData.split(",").forEach((v) => {
    const li = document.createElement("li");
    li.innerHTML = v;
    todolist.append(li);
  });
}

add.addEventListener("click", () => {
  const { value } = input;
  const data = localStorage.getItem("todos");
  if (data == null) {
    localStorage.setItem("todos", value);
    todolist.innerHTML = "";
    const newData = localStorage.getItem("todos");
    newData.split(",").forEach((v) => {
      const li = document.createElement("li");
      li.innerHTML = v;
      todolist.append(li);
    });
  } else {
    const arr = data.split(",");
    arr.push(value); // 배열
    localStorage.setItem("todos", arr);
    todolist.innerHTML = "";
    const newData = localStorage.getItem("todos");
    newData.split(",").forEach((v) => {
      const li = document.createElement("li");
      li.innerHTML = v;
      todolist.append(li);
    });
  }
});

remove.addEventListener("click", () => {
  localStorage.removeItem("todos");
  todolist.innerHTML = "";
});
