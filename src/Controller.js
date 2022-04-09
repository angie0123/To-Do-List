class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
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
  }

  handleEditTodo(id, todo) {
    this.model.editTodo(id, todo);
    console.log("Edited: now ", this.model.todos);
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
