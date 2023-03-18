const Model = (() => {
  const todoList = [];

  function generateId() {
    return Math.floor(Math.random() * 10000);
  }

  function createTodo(title, description, dueDate, priority) {
    return {
      title,
      description,
      dueDate,
      priority,
      id: generateId(),
    };
  }

  function addTodo(todo) {
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

  return { createTodo, addTodo, removeTodo, getTodoList };
})();

export default Model;
