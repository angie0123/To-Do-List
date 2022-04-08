import View from "../view";
import addTask from "./addTodo";
import taskList from "./taskList";
import addTodo from "./addTodo";

// component inject route name and todos for that route
export default function (route, todos) {
  const container = View.createElement("div", "main-container");
  const main = View.createElement("div", "main");
  const heading = createHeading(route);
  const existingTasks = taskList(todos);
  const addOption = addTodo();

  container.append(main);
  main.append(heading);
  main.append(existingTasks);
  main.append(addOption);

  document.body.append(container);
}

const createHeading = (route) => {
  const h1 = document.createElement("h1");
  h1.textContent = route;

  return h1;
};
