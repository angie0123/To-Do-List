import addTask from "./addTask";

export default function (myToDos) {
  console.log(myToDos);
  const container = document.createElement("div");
  container.classList.add("main-container");

  const main = document.createElement("div");
  main.classList.add("main");

  container.appendChild(main);

  main.appendChild(heading());
  main.appendChild(addTask(myToDos));

  return container;
}

const heading = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Inbox";

  return h1;
};
