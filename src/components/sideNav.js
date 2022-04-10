import View from "../View";
import Modal from "./Modal";
import ProjectForm from "./ProjectForm";

function render(projects, { handleAddProject }) {
  const prevModule = document.querySelector(".side-nav");
  const sideNav = View.createElement("div", "side-nav");

  if (prevModule) {
    prevModule.replaceWith(sideNav);
  }
  const nav = navList(["Inbox", "Today", "Upcoming"]);
  const projectsNav = createProjectsNav(projects, handleAddProject);

  sideNav.append(nav, projectsNav);
  document.body.appendChild(sideNav);
  toggleShowAllProjects(projects);
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

const createProjectsNav = (projects, handleAddProject) => {
  const projectTitleDiv = View.createElement("div", "projects-menu-header");
  const dropDownButton = View.createElement("div", "projects-title-container");
  const title = View.createElement("div", "projects-title");
  title.textContent = "Projects";
  const icon = View.createElement("div", "project-dropdown-icon");
  icon.textContent = "˃";
  const addIcon = View.createElement("div", "project-add-button");
  addIcon.textContent = "+";

  addIcon.addEventListener("click", () => {
    Modal.render(ProjectForm(handleAddProject));
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

export default { render };
