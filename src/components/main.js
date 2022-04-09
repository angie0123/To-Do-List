import View from "../View";
import taskList from "./taskList";
import addTodo from "./addTodo";

// component inject route name and todos for that route

const render = (
  route,
  todos,
  projects,
  { handleNewTodo, handleDeleteTodo, handleEditTodo }
) => {
  const prevModule = document.querySelector(".main-container");
  const container = View.createElement("div", "main-container");

  if (prevModule) {
    prevModule.replaceWith(container);
  }

  const main = View.createElement("div", "main");
  const heading = createHeading(route);
  const existingTasks = todos
    ? taskList(todos, projects, { handleEditTodo, handleDeleteTodo })
    : "";
  const addOption = addTodo(projects, handleNewTodo);

  container.append(main);
  main.append(heading);
  main.append(existingTasks);
  main.append(addOption);

  document.body.append(container);
};

const bindAddTodoHandler = (handler) => {
  addTodo.bindAddTodoHandler(handler);
};

const createHeading = (route) => {
  const h1 = document.createElement("h1");
  h1.textContent = route;

  return h1;
};

export default { render, bindAddTodoHandler };
