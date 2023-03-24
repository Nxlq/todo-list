import Model from "./model";
import View from "./view";

// const test1 = Model.createTodo(
//   "Homework",
//   "Math, English, Physics, complete everything and then maybe study for tests afterwards kj hkjhkjhk jhkj",
//   "3/21/2023",
//   "high priority"
// );

// const test2 = Model.createTodo(
//   "Clean Yard",
//   "rake the leaves",
//   "12/2/97",
//   "high"
// );

const Controller = (() => {
  window.addEventListener("DOMContentLoaded", () => {
    Model.addProject("default");

    // calling these methods are just for dev convenience
    Model.getProjects();
    Model.getCurrentProject();
    Model.getCurrentTodoList();
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    View.renderTodoList(Model.getCurrentTodoList());
  });
})();

View.newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  Model.addTodo(View.getTodoFormValues());
  View.renderTodoList(Model.getCurrentTodoList());
  Model.getProjects();
});
