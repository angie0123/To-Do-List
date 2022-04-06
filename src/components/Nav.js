export default function () {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  nav.appendChild(logo());

  return nav;
}

const logo = () => {
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "To do list";

  return logo;
};
