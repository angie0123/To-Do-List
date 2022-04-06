import "./style.css";
import Nav from "./components/Nav";
import SideNav from "./components/sideNav";
import Main from "./components/main";

class toDo {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }
}

class toDoList {
  list = [];
  appendItem(item) {
    this.list.push(item);
  }
}

const nav = Nav();
document.body.appendChild(nav);
const sideNav = SideNav();
document.body.appendChild(sideNav);
const main = Main();
document.body.appendChild(main);
