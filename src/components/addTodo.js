import View from "../view.js";
import newTaskForm from "./newForm";

export default function addTask() {
  const addTask = View.createElement("div", "addTask");

  const addIcon = View.createElement("div", "icon");
  addIcon.textContent = "+";

  const message = View.createElement("div", "prompt");
  message.textContent = "Add task";

  addTask.append(addIcon, message);

  addTask.onclick = () => {
    addTask.replaceWith(newTaskForm());
  };

  return addTask;
}
