import editForm from "./editform.js";
import List from "../data/tasks";

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
    addTask.replaceWith(newTaskForm());
  };

  return addTask;
}

const newTaskForm = () => {
  const form = document.createElement("form");
  form.setAttribute("id", "newForm");
  const formContent = document.createElement("div");
  formContent.classList.add("form-content");
  form.appendChild(formContent);

  addTextInputs(formContent);
  addBtnInputs(formContent);
  addButtons(form);

  return form;
};

const addTextInputs = (container) => {
  container.appendChild(nameField());
  container.appendChild(descriptionField());
};

const addButtons = (container) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  const addBtn = document.createElement("button");
  addBtn.disabled = true;
  addBtn.addEventListener("click", submitHandler);
  addBtn.classList.add("primary-btn");
  addBtn.classList.add("button");
  addBtn.textContent = "Add Task";

  const cancelBtn = document.createElement("button");
  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.getElementById("newForm");
    const parent = form.parentNode;
    parent.removeChild(form);
    parent.appendChild(addTask());
  });
  cancelBtn.classList.add("secondary-btn");
  cancelBtn.classList.add("button");
  cancelBtn.textContent = "Cancel";

  btnContainer.appendChild(addBtn);
  btnContainer.appendChild(cancelBtn);

  container.appendChild(btnContainer);
};

const nameField = () => {
  const nameField = document.createElement("div");
  nameField.classList.add("input-container");

  const labelName = document.createElement("label");
  labelName.setAttribute("for", "name");
  labelName.textContent = "Task Name";

  const inputName = document.createElement("input");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("placeholder", "eg. Take out the garbage by 10am");
  inputName.addEventListener("keyup", nameHandler);

  nameField.appendChild(labelName);
  nameField.appendChild(inputName);

  return nameField;
};

const descriptionField = () => {
  const descriptionField = document.createElement("div");
  descriptionField.classList.add("input-container");

  const descriptionName = document.createElement("label");
  descriptionName.setAttribute("for", "description");
  descriptionName.textContent = "Task Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("placeholder", "Description");

  descriptionField.appendChild(descriptionName);
  descriptionField.appendChild(descriptionInput);
  return descriptionField;
};

const addBtnInputs = (container) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-inputs-container");

  const dateInput = document.createElement("input");
  dateInput.classList.add("button");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("type", "date");

  btnContainer.appendChild(dateInput);

  btnContainer.appendChild(projectDropDown());

  container.appendChild(btnContainer);
};

const nameHandler = (event) => {
  if (event.target.value != "") {
    const addBtn = document.querySelector(".primary-btn");
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
};
const projects = ["Welcome!", "New Project"];

const projectDropDown = () => {
  const dropdown = document.createElement("select");
  dropdown.setAttribute("id", "project");
  dropdown.classList.add("button");
  const inbox = document.createElement("option");
  inbox.value = "inbox";
  inbox.textContent = "inbox";
  dropdown.appendChild(inbox);

  for (let project of projects) {
    const listItem = document.createElement("option");
    listItem.textContent = project;
    listItem.value = project;
    dropdown.appendChild(listItem);
  }
  return dropdown;
};

const submitHandler = (event) => {
  event.preventDefault();

  addTaskToList();

  const form = document.getElementById("newForm");
  const content = form.parentNode;
  const newForm = newTaskForm();
  const newList = taskList();
  content.removeChild(form);
  if (document.querySelector(".taskList")) {
    document.querySelector(".taskList").replaceWith(newList);
  } else {
    content.appendChild(newList);
  }
  content.appendChild(newForm);
};

const taskList = () => {
  // List.only ('inbox)   coming soon!
  const container = document.createElement("div");
  container.classList.add("taskList");
  const list = List.toArray();

  for (let i = 0; i < list.length; i++) {
    const listItem = renderTask(list[i], i);
    container.appendChild(listItem);
  }

  return container;
};

const renderTask = ({ name, description }, index) => {
  const task = document.createElement("div");
  task.classList.add("task");

  const checkbox = document.createElement("div");
  checkbox.classList.add("circle-checkbox");
  task.appendChild(checkbox);

  const taskName = document.createElement("div");
  taskName.classList.add("task-name");
  taskName.textContent = name;
  task.appendChild(taskName);

  const taskDescription = document.createElement("div");
  taskDescription.classList.add("description");
  taskDescription.textContent = description;
  task.appendChild(taskDescription);
  task.setAttribute("data-index", index);

  task.onclick = editForm;

  return task;
};

const addTaskToList = () => {
  const form = document.getElementById("newForm");
  const formData = form.elements;

  const newTask = {};
  for (let input of formData) {
    if (input.id) {
      newTask[input.id] = input.value;
    }
  }

  List.add(newTask);
};
