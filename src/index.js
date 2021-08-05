import "./styles.css";
import { loadPage } from "./dashboard/dashboard.js";
import * as listeners from "./listeners/index.js";

init();

function init() {
  loadPage();

  const main = document.querySelector("main");

  listeners.addMenuBtnListener();
  listeners.addInboxBtnListener(main);
  listeners.addTodayBtnListener(main);
}
