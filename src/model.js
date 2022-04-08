class Model {
  constructor() {
    this.todos = [];
    this.projects = [];
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
    this.projects.push({ name, id: this.projects.length });
  }

  deleteProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  editTodo(id, { name, description, date, project }) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { name, description, date, project, id: todo.id };
      }
      return todo;
    });
  }
}

const model = new Model();
model.addTodo({ name: "hi", description: "", date: "", project: "" });
console.log(model.todos);

model.deleteTodo(0);
console.log(model.todos);

export default Model;
