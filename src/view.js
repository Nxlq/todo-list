const View = (() => {
  const todoListContainer = document.querySelector("#todos-container");

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

  return { generateTodoDom, renderTodoList };
})();

export default View;
