import View from "../View";
import editForm from "./editform";

//expect: list of todo objects
//do: render each object to .taskList and return it
export default function (
  todos,
  projects,
  { handleEditTodo, handleDeleteTodo }
) {
  const list = View.createElement("div", "taskList");

  todos.forEach((todo) => {
    const listItem = createTask(
      todo,
      projects,
      handleEditTodo,
      handleDeleteTodo
    );
    list.append(listItem);
  });

  return list;
}

const createTask = (todo, projects, handleEditTodo, handleDeleteTodo) => {
  const { name, description } = todo;
  const task = View.createElement("div", "task");
  const checkbox = View.createElement("div", "circle-checkbox");
  const taskName = View.createElement("div", "task-name");
  taskName.textContent = name;

  const taskDescription = View.createElement("div", "description");
  taskDescription.textContent = description;

  task.append(checkbox, taskName, taskDescription);

  task.onclick = () => {
    editForm(todo, projects, handleEditTodo);
  };

  return task;
};
