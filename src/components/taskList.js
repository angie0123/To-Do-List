import View from "../View";
import editForm from "./editform";

export default function (
  todos,
  projects,
  { handleEditTodo, handleDeleteTodo }
) {
  const list = View.createElement("ul", "taskList");

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
  const task = View.createElement("li", "task");
  const checkbox = View.createElement("div", "circle-checkbox");
  const taskDate = View.createElement("div", "date");
  taskDate.textContent = todo.date;
  const taskContent = View.createElement("div", "content");

  const taskName = View.createElement("div", "task-name");
  taskName.textContent = name;

  checkbox.addEventListener("click", () => {
    event.stopPropagation();
    handleDeleteTodo(todo.id);
  });

  const taskDescription = View.createElement("div", "description");
  taskDescription.textContent = description;

  taskContent.append(taskName, taskDescription, taskDate);
  task.append(checkbox, taskContent);

  task.onclick = () => {
    editForm(todo, projects, handleEditTodo);
  };

  return task;
};
