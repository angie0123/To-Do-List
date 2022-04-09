import Nav from "./components/Nav";
import SideNav from "./components/sideNav";
import Main from "./components/main";

class View {
  handlers = {};
  constructor(todos, projects, route) {
    this.todos = todos;
    this.projects = projects;
    this.currentRoute = route;
  }

  static createElement(type, className) {
    const element = document.createElement(type);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  setHandlers(handlers) {
    this.handlers = handlers;
  }

  setRoute(route) {
    this.currentRoute = route;
  }

  setTodos(todos) {
    this.todos = todos;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  render() {
    Nav();
    SideNav(["projects"]); // expects all projects
    Main.render(this.currentRoute, this.todos, this.projects, this.handlers);
  }

  updateMain() {
    Main.render(this.currentRoute, this.todos, this.projects, this.handlers);
  }
}

export default View;
