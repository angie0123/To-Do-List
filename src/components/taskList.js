import View from "../view";

//expect: list of todo objects
//do: render each object to .taskList and return it
export default function (todos) {
  console.log("called!");
  const list = View.createElement("div", "taskList");

  todos.forEach((todo) => {
    const listItem = createTask(todo);
    list.append(listItem);
  });

  return list;
}

const createTask = ({ name, description, id }) => {
  const task = View.createElement("div", "task");
  const checkbox = View.createElement("div", "circle-checkbox");
  const taskName = View.createElement("div", "task-name");
  taskName.textContent = name;

  const taskDescription = View.createElement("div", "description");
  taskDescription.textContent = description;

  task.append(checkbox, taskName, taskDescription);

  task.onclick = () => {
    console.log(id);
    // editForm(id);
  };

  return task;
};