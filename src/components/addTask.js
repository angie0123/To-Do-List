import List from "../data/tasks";
import newTaskForm from "../components/newform";

export default function addTask() {
  const addTask = document.createElement("div");
  addTask.classList.add("addTask");

  const addIcon = document.createElement("div");
  addIcon.classList.add("icon");
  addIcon.textContent = "+";

  addTask.appendChild(addIcon);

  const message = document.createElement("div");
  message.classList.add("prompt");
  message.textContent = "Add task";

  addTask.appendChild(message);

  addTask.onclick = () => {
    const main = addTask.parentNode;
    main.removeChild(addTask);
    main.appendChild(newTaskForm());
  };

  return addTask;
}

const modal = (event) => {
  const taskIndex = event.currentTarget.getAttribute("data-index");
  //render a modal and display info of the task
  //dummy info
  const task = {
    name: "uhhh",
    description: "errrr",
    date: null,
    project: "inbox",
  };

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const card = document.createElement("div");
  card.classList.add("card");
  overlay.appendChild(card);

  card.appendChild(form);

  document.body.appendChild(overlay);
};
