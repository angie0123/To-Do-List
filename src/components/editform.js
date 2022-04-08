export default function (event) {
  const taskIndex = event.currentTarget.getAttribute("data-index");
  //render a modal and display info of the task
  //dummy info
  const task = {
    name: "uhhh",
    description: "",
    date: "",
    project: "inbox",
  };

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const card = document.createElement("div");
  card.classList.add("card");
  overlay.appendChild(card);

  card.appendChild(form(task));

  document.body.appendChild(overlay);
}

const form = (task) => {
  const form = document.createElement("form");
  const formContent = document.createElement("div");
  formContent.classList.add("form-content");
  form.appendChild(formContent);

  addTextInputs(formContent, task);
  addBtnInputs(formContent, task);
  addButtons(form);

  return form;
};

const addTextInputs = (container, task) => {
  container.appendChild(nameField(task));
  container.appendChild(descriptionField(task));
};

const nameField = (task) => {
  const nameField = document.createElement("div");
  nameField.classList.add("input-container");

  const labelName = document.createElement("label");
  labelName.setAttribute("for", "name");
  labelName.textContent = "Task Name";

  const inputName = document.createElement("input");
  inputName.setAttribute("id", "name");
  //
  inputName.value = task.name;
  inputName.addEventListener("keyup", nameHandler);

  nameField.appendChild(labelName);
  nameField.appendChild(inputName);

  return nameField;
};

const descriptionField = (task) => {
  const descriptionField = document.createElement("div");
  descriptionField.classList.add("input-container");

  const descriptionName = document.createElement("label");
  descriptionName.setAttribute("for", "description");
  descriptionName.textContent = "Task Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("id", "description");

  if (task.description == "") {
    descriptionInput.setAttribute("placeholder", "Description");
  } else {
    descriptionInput.value = task.description;
  }

  descriptionField.appendChild(descriptionName);
  descriptionField.appendChild(descriptionInput);
  return descriptionField;
};

const addButtons = (container) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  const addBtn = document.createElement("button");
  addBtn.disabled = true;
  addBtn.addEventListener("click", submitHandler);
  addBtn.classList.add("primary-btn");
  addBtn.classList.add("button");
  addBtn.textContent = "Save";

  const cancelBtn = document.createElement("button");
  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.querySelector("form");
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

const addBtnInputs = (container, task) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-inputs-container");

  const dateInput = document.createElement("input");
  dateInput.classList.add("button");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("type", "date");

  if (task.date !== "") {
    dateInput.value = task.date;
  }

  btnContainer.appendChild(dateInput);

  btnContainer.appendChild(projectDropDown(task));

  container.appendChild(btnContainer);
};

const nameHandler = (event) => {
  if (event.target.value != "") {
    const addBtn = document.querySelector(".add-btn");
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
};

//dummy projects
const projects = ["Welcome!", "New Project"];

const projectDropDown = (task) => {
  const dropdown = document.createElement("select");
  dropdown.setAttribute("id", "project");
  dropdown.classList.add("button");

  const projectOption = createProjectOption(task.project);
  dropdown.appendChild(projectOption);

  for (let project of projects) {
    const projectOption = createProjectOption(project);
    dropdown.appendChild(projectOption);
  }
  return dropdown;
};

const createProjectOption = (project) => {
  const projectOption = document.createElement("option");
  projectOption.value = project;
  projectOption.textContent = project;

  return projectOption;
};

const submitHandler = (event) => {
  event.preventDefault();
  console.log("submitted!");
  // addTaskToList();

  // const form = document.forms[0];
  // const parent = form.parentNode;
  // parent.removeChild(form);
  // renderTasks(parent, "inbox");
  // parent.appendChild(taskEditor());
};
