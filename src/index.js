import "./style.css";
import Model from "./Model";
import View from "./View";
import Controller from "./Controller";

const view = new View();
const model = new Model();
view.currentRoute = "inbox";

const controller = new Controller(view, model);

controller.init();
controller.bindhandlers();
