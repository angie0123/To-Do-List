class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.routes = ["Inbox", "Today", "Upcoming"];
  }
  init() {
    this.view.setProjects(this.model.projects);
    this.model.todos = [
      {
        name: "fdsfs",
        description: "sdfds",
        date: "sdfdsfds",
        project: "dsf",
        id: 0,
      },
    ];
    this.handleRoute("Inbox");
    this.bindhandlers();
    this.view.render();
  }

  handleRoute(routeID) {
    if (routeID === "Inbox") {
      this.view.setRoute("Inbox");
      const noProjectTodos = this.model.getNoProjectTodos();
      this.view.setTodos(noProjectTodos);
    }
    console.log("handle route!", routeID);
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

  handleAddProject(name) {
    this.model.addProject(name);
    this.view.setProjects(this.model.projects);
    this.view.updateSideNav();
    this.view.updateMain();
  }

  handleDeleteProject(id) {
    this.model.deleteProject(id);
    this.view.setProjects(this.model.projects);
    this.view.updateSideNav();
  }

  bindhandlers() {
    const self = this;
    this.view.setHandlers({
      handleNewTodo: self.handleNewTodo.bind(self),
      handleDeleteTodo: self.handleDeleteTodo.bind(self),
      handleEditTodo: self.handleEditTodo.bind(self),
      handleAddProject: self.handleAddProject.bind(self),
      handleDeleteProject: self.handleDeleteProject.bind(self),
      handleRoute: self.handleRoute.bind(self),
    });
  }
}

export default Controller;
