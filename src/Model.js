class Model {
  constructor() {
    this.todos = [];
    this.projects = ["Welcome!"];
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
    this.projects.push(name);
  }

  deleteProject(name) {
    this.projects = this.projects.filter((project) => project.name !== name);
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
}

export default Model;
