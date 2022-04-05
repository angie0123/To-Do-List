import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "hi world!";

  return element;
}

document.body.appendChild(component());
