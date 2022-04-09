import View from "../View";

const render = (child) => {
  const overlay = View.createElement("div", "overlay");
  const card = View.createElement("div", "card");

  overlay.append(card);
  card.append(child);

  document.body.append(overlay);
};

const close = () => {
  const modal = document.querySelector(".overlay");
  modal.remove();
};

export default { render, close };
