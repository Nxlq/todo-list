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
    // calling these methods are just for dev convenience
    Model.getProjects();
    Model.getCurrentProject();
    Model.getCurrentTodoList();
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    View.renderTodoList(Model.getCurrentTodoList());
  });
})();

// Handling when the user submits a new todo
View.newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  Model.addTodo(View.getTodoFormValues());
  View.renderTodoList(Model.getCurrentTodoList());
  // localStorage.setItem("projects", JSON.stringify(Model.getProjects()));

  View.newTodoForm.reset(); // init form at the end of the submit event (there is probably a better way to do this but hey this works for the sake of this project)
});

// Handling when the user submits a new project
View.newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  Model.addProject(View.getNewProjectTitle());
  View.appendNewProject(View.getNewProjectTitle());

  // last el child of todos nav should be the most recently added project, should create a container for projects instead but this works for now (and for the sake of this project)
  View.todosNav.lastElementChild.addEventListener("click", (e) => {
    console.log(e.target.dataset.projectTitle);
    Model.setCurrentProject(e.target.dataset.projectTitle);
    View.renderTodoList(Model.getCurrentTodoList());
  });

  // localStorage.setItem("projects", JSON.stringify(Model.getProjects()));
  View.newProjectForm.reset(); // init form at the end of the submit event (there is probably a better way to do this but hey this works for the sake of this project)
});
