class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.routes = ["Inbox", "Today", "Upcoming"];
  }
  init() {
    this.view.setProjects(this.model.projects);
    this.bindhandlers();
    this.setRoute("Inbox");
    this.view.render();
  }

  setRoute(routeID) {
    if (routeID === "Inbox") {
      this.view.setRoute("Inbox");
      const noProjectTodos = this.model.getNoProjectTodos();
      this.view.setTodos(noProjectTodos);
      return;
    }
    if (routeID === "Today") {
      this.view.setRoute("Today");
      const todayTodos = this.model.getTodayTodos();
      this.view.setTodos(todayTodos);
      return;
    }
    this.model.projects.forEach((project) => {
      if (project.name === routeID) {
        this.view.setRoute(project.name);
        const projectTodos = this.model.getProjectTodos(project.name);
        this.view.setTodos(projectTodos);
      }
    });
  }

  handleRoute(routeID) {
    this.setRoute(routeID);
    this.view.updateMain();
  }

  handleNewTodo(todo) {
    this.model.addTodo(todo);
    this.handleRoute(this.view.currentRoute);
  }

  handleDeleteTodo(id) {
    this.model.deleteTodo(id);
    this.handleRoute(this.view.currentRoute);
  }

  handleEditTodo(id, todo) {
    this.model.editTodo(id, todo);
    this.handleRoute(this.view.currentRoute);
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

  enableSaveData() {
    const self = this;
    window.addEventListener("beforeunload", function (evt) {
      window.localStorage.setItem("app", JSON.stringify(self));
      evt.preventDefault();
      evt.returnValue = "";

      return null;
    });
  }
}

export default Controller;
