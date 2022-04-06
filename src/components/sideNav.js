export default function () {
  const sideNav = document.createElement("div");
  sideNav.classList.add("side-nav");

  const nav = navList(["Inbox", "Today", "Upcoming"]);

  const projects = navList(["Projects"]);

  sideNav.appendChild(nav);
  sideNav.appendChild(projects);

  return sideNav;
}

const navList = (list) => {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  for (let item of list) {
    const element = document.createElement("li");
    const link = document.createElement("a");
    element.appendChild(link);
    link.textContent = item;
    ul.appendChild(element);
  }

  nav.appendChild(ul);
  return nav;
};
