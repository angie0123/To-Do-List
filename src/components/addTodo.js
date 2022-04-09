import View from "../View.js";
import newTaskForm from "./newForm";

const render = (projects, handleNewTodo) => {
  const addTask = View.createElement("div", "addTask");

  const addIcon = View.createElement("div", "icon");
  addIcon.textContent = "+";

  const message = View.createElement("div", "prompt");
  message.textContent = "Add task";

  addTask.append(addIcon, message);

  addTask.onclick = () => {
    addTask.replaceWith(newTaskForm(projects, handleNewTodo));
  };

  return addTask;
};

export default render;
