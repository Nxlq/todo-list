import Model from "./model";
import View from "./view";

const newInput = document.querySelector("#new-todo-input");
const newBtn = document.querySelector(".btn.add-new");
const modal = document.querySelector(".modal");

newBtn.addEventListener("click", () => {
  // show new todo form
  modal.classList.remove("hidden");
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) modal.classList.add("hidden"); // Quick solution to close modal for dev purposes, probably a bad practice lol
});

const test1 = Model.createTodo(
  "Title here",
  "description here",
  "due date here",
  "high prio"
);

const test2 = Model.createTodo("hi", "kfd", "fd", "high");
Model.addTodo(test1);
Model.addTodo(test2);
Model.getTodoList();
