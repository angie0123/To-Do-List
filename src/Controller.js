class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.setProjects(this.model.projects);
    this.bindhandlers();
    this.view.render();
  }

  handleNewTodo(todo) {
    this.model.addTodo(todo);
    this.view.setTodos(this.model.todos);
    this.view.updateMain();
  }

  handleDeleteTodo(id) {
    this.model.deleteTodo(id);
    this.view.setTodos(this.model.todos);
    this.view.updateMain();
  }

  handleEditTodo(id, todo) {
    this.model.editTodo(id, todo);
    this.view.setTodos(this.model.todos);
    this.view.updateMain();
  }

  bindhandlers() {
    const self = this;
    this.view.setHandlers({
      handleNewTodo: self.handleNewTodo.bind(self),
      handleDeleteTodo: self.handleDeleteTodo.bind(self),
      handleEditTodo: self.handleEditTodo.bind(self),
    });
  }
}

export default Controller;
