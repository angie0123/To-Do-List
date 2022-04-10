import View from "../View";
import Modal from "./Modal";

export default function (handleAddProject) {
  const projectform = View.createElement("form", "projectForm");

  const title = View.createElement("div", "heading");
  title.textContent = "Add Project";

  const nameLabel = View.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";

  const nameInput = View.createElement("input");
  nameInput.setAttribute("id", "name");
  nameInput.addEventListener("keyup", enableSubmit);

  const nameDiv = View.createElement("div", "input-container");

  const btns = buttons(handleAddProject);

  nameDiv.append(nameLabel, nameInput);
  projectform.append(title, nameDiv, btns);

  return projectform;
}

const enableSubmit = (event) => {
  const submitBtn = document.querySelector(".projectForm .primary-btn");
  if (event.target.value != "") {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

const buttons = (handleAddProject) => {
  const btnContainer = View.createElement("div", "btn-container");

  const addBtn = View.createElement("button", "primary-btn");
  addBtn.classList.add("button");
  addBtn.disabled = true;
  addBtn.textContent = "Add";
  addBtn.addEventListener("click", () => {
    event.preventDefault();
    const nameInput = document.querySelector(".projectForm input#name");
    handleAddProject(nameInput.value);
    Modal.close();
  });
  const cancelBtn = View.createElement("button", "secondary-btn");

  cancelBtn.addEventListener("click", () => {
    event.preventDefault();
    Modal.close();
  });
  cancelBtn.classList.add("button");
  cancelBtn.textContent = "Cancel";

  btnContainer.append(cancelBtn, addBtn);

  return btnContainer;
};
