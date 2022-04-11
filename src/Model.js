import { format } from "date-fns";

class Model {
  constructor() {
    this.todos = [];
    this.projects = [{ name: "Welcome!", id: 0 }];
  }

  addTodo({ name, description, date, project }) {
    const todo = {
      name,
      description,
      date,
      project,
      id: this.todos.length,
    };
    this.todos.push(todo);
  }

  addProject(name) {
    const project = { name, id: this.projects.length };
    this.projects.push(project);
  }

  deleteProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  editTodo(id, todo) {
    const { name, description, date, project } = todo;
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { name, description, date, project, id: todo.id };
      }
      return todo;
    });
  }

  getNoProjectTodos() {
    const noProjectTodos = this.todos.filter((todo) => {
      return todo.project === "";
    });
    return noProjectTodos;
  }

  getTodayTodos() {
    const todayTodos = this.todos.filter((todo) => {
      const today = format(new Date(), "yyyy-MM-dd");
      return todo.date === today;
    });
    return todayTodos;
  }
}

export default Model;
