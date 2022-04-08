import View from "../view";
import addTask from "./addTask";
import taskList from "./taskList";

// component inject route name and todos for that route
export default function (route, todos) {
  const container = View.createElement("div", "main-container");
  const main = View.createElement("div", "main");
  const heading = createHeading(route);
  const existingTasks = taskList(todos);

  container.append(main);
  main.append(heading);
  main.append(existingTasks);
  // main.appendChild(addTask());

  document.body.appendChild(container);
}

const createHeading = (route) => {
  const h1 = document.createElement("h1");
  h1.textContent = route;

  return h1;
};
