const day = document.querySelector("#DAY");
day.addEventListener("input", (e) => {
  const { value } = e.target;
  const [year, month, date] = value.split("-");
});
