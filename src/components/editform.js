import View from "../view";

export default function (task, projects) {
  const overlay = View.createElement("div", "overlay");
  const card = View.createElement("div", "card");
  const editForm = form(task, projects);

  overlay.append(card);
  card.append(editForm);

  document.body.append(overlay);
}

const form = (task, projects) => {
  const form = View.createElement("form");
  form.setAttribute("id", "editForm");
  const formContent = View.createElement("div", "form-content");

  form.append(formContent, btns(task, projects));
  formContent.append(...textInputs(task), btnInputs(task, projects));
  return form;
};

const textInputs = ({ name, description }) => {
  const nameContainer = nameField(name);
  const descriptionContainer = descriptionField(description);
  return [nameContainer, descriptionContainer];
};

const btns = (task, projects) => {
  const btnContainer = View.createElement("div", "btn-container");

  const saveBtn = View.createElement("button", "primary-btn");
  saveBtn.classList.add("button");
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", () => {
    saveHandler(task);
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
  closeModal();
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
  const list = [...projects];

  if (task.project !== "") {
    list.splice(projects.indexOf(task.project), 1);
    list.unshift(task.project);
  } else {
    list.unshift("inbox");
  }

  list.forEach((project) => {
    const listItem = document.createElement("option");
    listItem.textContent = project;
    listItem.value = project;
    dropdown.appendChild(listItem);
  });

  return dropdown;
};

const saveHandler = (event) => {
  event.preventDefault();

  // model.addtodo
  console.log("edit todo and update view");
  //view.updateMain
  closeModal();
};

const closeModal = () => {
  const modal = document.querySelector(".overlay");
  modal.remove();
};
