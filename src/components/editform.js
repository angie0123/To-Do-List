import View from "../View";
import Modal from "./Modal";

export default function (task, projects, handleEditTodo) {
  const editForm = form(task, projects, handleEditTodo);
  Modal.render(editForm);
}

const form = (task, projects, handleEditTodo) => {
  const form = View.createElement("form");
  form.setAttribute("id", "editForm");
  const formContent = View.createElement("div", "form-content");

  form.append(formContent, btns(task, projects, handleEditTodo));
  formContent.append(...textInputs(task), btnInputs(task, projects));
  return form;
};

const textInputs = ({ name, description }) => {
  const nameContainer = nameField(name);
  const descriptionContainer = descriptionField(description);
  return [nameContainer, descriptionContainer];
};

const btns = (task, projects, handleEditTodo) => {
  const btnContainer = View.createElement("div", "btn-container");

  const saveBtn = View.createElement("button", "primary-btn");
  saveBtn.classList.add("button");
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", () => {
    saveHandler(task, handleEditTodo);
  });

  const cancelBtn = View.createElement("button", "secondary-btn");

  cancelBtn.addEventListener("click", () => {
    cancelHandler();
  });
  cancelBtn.classList.add("button");
  cancelBtn.textContent = "Cancel";

  btnContainer.append(saveBtn, cancelBtn);

  return btnContainer;
};

const cancelHandler = () => {
  event.preventDefault();
  Modal.close();
};

const nameField = (name) => {
  const nameField = View.createElement("div", "input-container");

  const labelName = View.createElement("label");
  labelName.setAttribute("for", "name");
  labelName.textContent = "Task Name";

  const inputName = View.createElement("input");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("placeholder", "eg. Take out the garbage by 10am");
  inputName.value = name;

  nameField.append(labelName, inputName);
  return nameField;
};

const descriptionField = (description) => {
  const descriptionField = View.createElement("div", "input-container");

  const descriptionName = View.createElement("label");
  descriptionName.setAttribute("for", "description");
  descriptionName.textContent = "Task Description";

  const descriptionInput = View.createElement("textarea");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("placeholder", "Description");
  descriptionInput.value = description;

  descriptionField.append(descriptionName, descriptionInput);
  return descriptionField;
};

const btnInputs = (task, projects) => {
  const btnContainer = View.createElement("div", "btn-inputs-container");

  const dateInput = View.createElement("input", "button");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("type", "date");

  const projectOptions = projectDropDown(task, projects);

  btnContainer.append(dateInput, projectOptions);

  return btnContainer;
};

const projectDropDown = (task, projects) => {
  const dropdown = View.createElement("select", "button");
  dropdown.setAttribute("id", "project");
  const dropDownList = [];

  if (projects) {
    dropDownList.concat([...projects]);
  }

  if (task.project !== "") {
    dropDownList.splice(projects.indexOf(task.project), 1);
    dropDownList.unshift(task.project);
  } else {
    dropDownList.unshift("inbox");
  }

  dropDownList.forEach((project) => {
    const listItem = document.createElement("option");
    listItem.textContent = project;
    listItem.value = project;
    dropdown.appendChild(listItem);
  });

  return dropdown;
};

const saveHandler = (task, handleEditTodo) => {
  event.preventDefault();
  const form = document.getElementById("editForm");
  const newTodo = {};
  [...form.elements].forEach((element) => {
    if (element.id) newTodo[element.id] = element.value;
    if (element.id === "project" && element.value === "inbox") {
      newTodo[element.id] = "";
    }
  });
  handleEditTodo(task.id, newTodo);
  Modal.close();
};
