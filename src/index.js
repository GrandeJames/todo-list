import "./styles.css";
import { loadPage } from "./dashboard/dashboard.js";
import * as listeners from "./listeners/index.js";

init();

function init() {
  loadPage();

  listeners.addMenuBtnListener();
}
