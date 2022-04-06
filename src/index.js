import "./style.css";
import Nav from "./components/Nav";
import SideNav from "./components/sideNav";
import Main from "./components/main";
import list from "./data/tasks";

const nav = Nav();
document.body.appendChild(nav);
const sideNav = SideNav();
document.body.appendChild(sideNav);
const main = Main();
document.body.appendChild(main);
