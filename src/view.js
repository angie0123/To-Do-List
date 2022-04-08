import renderNav from "./components/Nav";
import rendersideNav from "./components/sideNav";
import renderMain from "./components/main";

class View {
  constructor(todos, projects) {
    this.todos = todos;
    this.projects = projects;
  }

  static createElement(type, className) {
    const element = document.createElement(type);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  render() {
    renderNav();
    rendersideNav(["projects"]); // insert projects here
    renderMain("inbox", [
      { name: "ello", description: "meh", date: "", project: "inbox", id: 0 },
      { name: "two", description: "meh", date: "", project: "inbox", id: 1 },
      { name: "three", description: "meh", date: "", project: "inbox", id: 2 },
    ]); //insert route here
  }
}

export default View;
