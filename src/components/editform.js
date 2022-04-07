export default function (event) {
  const taskIndex = event.currentTarget.getAttribute("data-index");
  //render a modal and display info of the task
  //dummy info
  const task = {
    name: "uhhh",
    description: "errrr",
    date: null,
    project: "inbox",
  };

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const card = document.createElement("div");
  card.classList.add("card");
  overlay.appendChild(card);

  card.appendChild(form);

  document.body.appendChild(overlay);
}
