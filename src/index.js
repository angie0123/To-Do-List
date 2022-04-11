import "./style.css";
import Model from "./Model";
import View from "./View";
import Controller from "./Controller";

let controller = {};
if (window.localStorage.length !== 0) {
  const controllerJSON = localStorage.getItem("app");
  controller = JSON.parse(controllerJSON);
  const methods = new Controller(new View(), new Model());
  Object.setPrototypeOf(controller.model, Object.getPrototypeOf(methods.model));
  Object.setPrototypeOf(controller.view, Object.getPrototypeOf(methods.view));
  Object.setPrototypeOf(controller, Object.getPrototypeOf(methods));
  console.log(controller);
} else {
  const view = new View();
  const model = new Model();
  controller = new Controller(view, model);
}

controller.init();
controller.enableSaveData();
