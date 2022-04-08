import renderNav from "./components/Nav";
import rendersideNav from "./components/sideNav";

class View {
  constructor(todos, projects) {
    this.todos = todos;
    this.projects = projects;
  }

  render() {
    renderNav();
    rendersideNav(["projects"]); // insert projects here
    // renderMain(todos);
  }
}

export default View;
