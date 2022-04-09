import View from "../View";

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

const createProjectsNav = () => {
  const projectTitleDiv = View.createElement("div", "projects-menu-header");
  const dropDownButton = View.createElement("div", "projects-title-container");
  const title = View.createElement("div", "projects-title");
  title.textContent = "Projects";
  const icon = View.createElement("div", "project-dropdown-icon");
  icon.textContent = ">";
  const addIcon = View.createElement("div", "project-add-button");
  addIcon.textContent = "+";

  dropDownButton.append(icon, title);
  projectTitleDiv.append(dropDownButton, addIcon);
  return projectTitleDiv;
};
