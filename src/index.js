import Model from "./model";
import View from "./view";

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
