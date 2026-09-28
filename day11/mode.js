const button = document.querySelector(".button");

button.addEventListener("click", () => {
  button.textContent =
    button.textContent.trim() === "어둡게" ? "밝게" : "어둡게";
  button.classList.toggle("dark");
  document.body.classList.toggle("dark");
});
