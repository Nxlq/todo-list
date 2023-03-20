const View = (() => {
  const todoListContainer = document.querySelector("#todos-container");
  const newTodoBtn = document.querySelector(".btn.add-new");
  const modal = document.querySelector(".modal");
  const newTodoForm = document.getElementById("new-todo-form");
  const todoFormTitleInput = document.getElementById("title");
  const todoFromDescriptionInput = document.getElementById("description");
  const todoFormDueDateInput = document.getElementById("due-date");
  const todoFormPriorityInput = document.getElementById("priority");
  const btnSubmitTodoForm = document.getElementById("btn-submit-todo");
  const todosContainer = document.getElementById("todos-container");

  function generateTodoDom(todo) {
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

  // just a helper function for rendering the todolist
  function renderTodo(todo) {
    todoListContainer.appendChild(todo);
  }

  function renderTodoList(todoList) {
    while (todoListContainer.childElementCount > 1) {
      todoListContainer.removeChild(todoListContainer.lastElementChild);
    }
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

    window.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("modal")) modal.classList.add("hidden"); // Quick solution to close modal for dev purposes, probably a bad practice lol
    });

    btnSubmitTodoForm.addEventListener("click", () => {
      // for dev convenience
      modal.classList.add("hidden");
    });
  }

  function getTodoFormValues() {
    return {
      title: todoFormTitleInput.value,
      description: todoFromDescriptionInput.value,
      dueDate: todoFormDueDateInput.value,
      priority: todoFormPriorityInput.value,
    };
  }

  handleTodoModalView();
  return {
    renderTodoList,
    getTodoFormValues,
    newTodoForm,
  };
})();

export default View;
