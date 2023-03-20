const Model = (() => {
  const todoList = [];

  function generateId() {
    return Math.floor(Math.random() * 10000);
  }

  function createTodoObj(todoFormInputsObj) {
    return {
      title: todoFormInputsObj.title,
      description: todoFormInputsObj.description,
      dueDate: todoFormInputsObj.dueDate,
      priority: todoFormInputsObj.priority,
      id: generateId(),
    };
  }

  function addTodo(todoFormInputValues) {
    const todo = createTodoObj(todoFormInputValues);
    todoList.push(todo);
  }

  function removeTodo(id) {
    const targettedTodo = todoList.indexOf(
      todoList.find((todo) => todo.id === id)
    );
    todoList.splice(targettedTodo, 1);
  }

  function getTodoList() {
    console.log({ todoList });
    return todoList;
  }

  return { addTodo, removeTodo, getTodoList };
})();

export default Model;
