export default function () {
  const container = document.createElement("div");
  container.classList.add("main-container");

  const main = document.createElement("div");
  main.classList.add("main");

  container.appendChild(main);

  main.appendChild(heading());
  main.appendChild(addTask());

  return container;
}

const heading = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Inbox";

  return h1;
};

const addTask = () => {
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

  return addTask;
};
