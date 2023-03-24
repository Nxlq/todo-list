const Model = (() => {
  let currentProject = "default";
  const projects = {};

  function projectFactory() {
    const todoList = [];
    return { todoList };
  }

  function getProjects() {
    console.log(projects);
    return projects;
  }

  function addProject(projectName) {
    projects[projectName] = projectFactory();
  }

  function getCurrentProject() {
    console.log(projects[currentProject]);
    return projects[currentProject];
  }

  function setCurrentProject(projectName) {
    currentProject = projectName;
  }

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
    projects[currentProject].todoList.push(todo);
  }

  function removeTodo(id) {
    const targettedTodo = getCurrentProject().todoList.indexOf(
      projects[currentProject].todoList.find((todo) => todo.id === id)
    );
    projects[currentProject].todoList.splice(targettedTodo, 1);
  }

  function getCurrentTodoList() {
    return projects[currentProject].todoList;
  }

  return {
    addProject,
    setCurrentProject,
    getProjects,
    getCurrentProject,
    addTodo,
    removeTodo,
    getCurrentTodoList,
  };
})();

export default Model;

// const Model = (() => {
//   let currentProject = "default";
//   const projects = {};

//   function projectFactory() {
//     const todoList = [];

//     function generateId() {
//       return Math.floor(Math.random() * 10000);
//     }

//     function createTodoObj(todoFormInputsObj) {
//       return {
//         title: todoFormInputsObj.title,
//         description: todoFormInputsObj.description,
//         dueDate: todoFormInputsObj.dueDate,
//         priority: todoFormInputsObj.priority,
//         id: generateId(),
//       };
//     }

//     function addTodo(todoFormInputValues) {
//       const todo = createTodoObj(todoFormInputValues);
//       todoList.push(todo);
//     }

//     function removeTodo(id) {
//       const targettedTodo = todoList.indexOf(
//         todoList.find((todo) => todo.id === id)
//       );
//       todoList.splice(targettedTodo, 1);
//     }

//     function getTodoList() {
//       return todoList;
//     }

//     return { todoList, addTodo, removeTodo, getTodoList };
//   }

//   function getProjects() {
//     return projects;
//   }

//   function addProject(projectName) {
//     projects[projectName] = projectFactory();
//   }

//   function getCurrentProject() {
//     console.log(projects[currentProject]);
//     return projects[currentProject];
//   }

//   function setCurrentProject(projectName) {
//     currentProject = projectName;
//   }

//   function addTodoToCurrentProject(todoFormInputValues) {}

//   return {
//     addProject,
//     setCurrentProject,
//     getProjects,
//     getCurrentProject,
//   };
// })();

// export default Model;
