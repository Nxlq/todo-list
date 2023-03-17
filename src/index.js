const newInput = document.querySelector("#new-todo-input");
const newBtn = document.querySelector(".btn.add-new");

newBtn.addEventListener("click", () => {
  console.log(newInput.value);
});
