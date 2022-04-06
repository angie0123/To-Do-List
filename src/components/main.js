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

  addTask.onclick = () => {
    const main = addTask.parentNode;
    main.removeChild(addTask);
    main.appendChild(taskEditor());
  };

  return addTask;
};

const taskEditor = () => {
  const form = document.createElement("form");
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
  addBtn.classList.add("add-btn");
  addBtn.textContent = "Add Task";

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.textContent = "cancel";

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
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date");

  btnContainer.appendChild(dateInput);

  const projectInput = document.createElement("button");
  projectInput.textContent = "Inbox";
  projectInput.classList.add("project-input");

  btnContainer.appendChild(projectInput);

  container.appendChild(btnContainer);
};
