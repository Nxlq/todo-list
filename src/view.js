const View = (() => {
  const todoListContainer = document.querySelector("#todos-container");
  const newTodoBtn = document.querySelector(".btn.add-new");
  const modal = document.querySelector(".modal");

  function generateTodoDom(todo) {
    console.log(todo);
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    const todoTitle = document.createElement("h3");
    todoTitle.classList.add("todo-title");
    todoTitle.textContent = todo.title;

    const todoDescription = document.createElement("p");
    todoDescription.classList.add("todo-description");
    todoDescription.textContent = todo.description;

    const todoDueDate = document.createElement("span");
    todoDueDate.classList.add("todo-dueDate");
    todoDueDate.textContent = todo.dueDate;

    const todoPriority = document.createElement("span");
    todoPriority.classList.add("todo-priority");
    todoPriority.textContent = todo.priority;

    todoContainer.append(todoTitle, todoDescription, todoDueDate, todoPriority);
    return todoContainer;
  }

  function renderTodo(todo) {
    todoListContainer.appendChild(todo);
  }

  function renderTodoList(todoList) {
    todoList.forEach((todo) => renderTodo(generateTodoDom(todo)));
  }

  function handleTodoModalView() {
    // ----Open Modal----
    newTodoBtn.addEventListener("click", () => {
      // show new todo form
      modal.classList.remove("hidden");
    });

    // ----Close Modal----
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") modal.classList.add("hidden");
    });

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) modal.classList.add("hidden"); // Quick solution to close modal for dev purposes, probably a bad practice lol
    });
  }

  handleTodoModalView();
  return { generateTodoDom, renderTodoList };
})();

export default View;
