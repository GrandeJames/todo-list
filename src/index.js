import "./styles.css";
import { loadInitialPage } from "./components/initial-page-load.js";
import * as listeners from "./modules/events.js";

init();

function init() {
  loadInitialPage();

  listeners.addMenuBtnListener();

  document
    .querySelectorAll(".menu-item")
    .forEach(menuItem => listeners.addMenuBtnListener(menuItem));
}
