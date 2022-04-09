import View from "../View";
import Modal from "./Modal";

export default function (projects) {
  const sideNav = View.createElement("div", "side-nav");
  const nav = navList(["Inbox", "Today", "Upcoming"]);
  const projectsNav = createProjectsNav(projects);

  sideNav.append(nav, projectsNav);
  document.body.appendChild(sideNav);
}

const navList = (list) => {
  const nav = View.createElement("nav");
  const ul = View.createElement("ul");

  for (let item of list) {
    const element = View.createElement("li");
    const link = View.createElement("a");
    element.append(link);
    link.textContent = item;
    ul.append(element);
  }

  nav.append(ul);
  return nav;
};

const createProjectsNav = (projects) => {
  const projectTitleDiv = View.createElement("div", "projects-menu-header");
  const dropDownButton = View.createElement("div", "projects-title-container");
  const title = View.createElement("div", "projects-title");
  title.textContent = "Projects";
  const icon = View.createElement("div", "project-dropdown-icon");
  icon.textContent = "˃";
  const addIcon = View.createElement("div", "project-add-button");
  addIcon.textContent = "+";

  addIcon.addEventListener("click", () => {
    Modal.render(newProjectForm());
  });

  dropDownButton.append(icon, title);
  projectTitleDiv.append(dropDownButton, addIcon);

  dropDownButton.addEventListener("click", () => {
    toggleShowAllProjects(projects);
  });
  return projectTitleDiv;
};

const toggleShowAllProjects = (projects) => {
  const dropdown = document.querySelector(".project-dropdown");
  const arrowIcon = document.querySelector(".project-dropdown-icon");
  if (dropdown === null) {
    const sideNav = document.querySelector(".side-nav");
    const allProjects = navList(projects);
    allProjects.classList.add("project-dropdown");
    arrowIcon.textContent = "˅";
    sideNav.append(allProjects);
  } else {
    dropdown.remove();
    arrowIcon.textContent = "˃";
  }
};

const newProjectForm = () => {
  const projectform = View.createElement("form", "projectForm");

  const title = View.createElement("div", "heading");
  title.textContent = "Add Project";

  const nameLabel = View.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";

  const nameInput = View.createElement("input");
  nameInput.setAttribute("id", "name");

  const nameDiv = View.createElement("div", "input-container");

  const btns = buttons();

  nameDiv.append(nameLabel, nameInput);
  projectform.append(title, nameDiv, btns);

  return projectform;
};

const buttons = (handleAddProject) => {
  const btnContainer = View.createElement("div", "btn-container");

  const addBtn = View.createElement("button", "primary-btn");
  addBtn.classList.add("button");
  addBtn.disabled = true;
  addBtn.textContent = "Add";
  addBtn.addEventListener("click", () => {
    event.preventDefault();

    // handleAddTodo(newTodo);
  });
  const cancelBtn = View.createElement("button", "secondary-btn");

  cancelBtn.addEventListener("click", () => {
    // cancelHandler(projects);
  });
  cancelBtn.classList.add("button");
  cancelBtn.textContent = "Cancel";

  btnContainer.append(cancelBtn, addBtn);

  return btnContainer;
};
