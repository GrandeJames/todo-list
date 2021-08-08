import "./styles.css";
import { loadInitialPage } from "./components/initial-page-load.js";
import * as listeners from "./modules/events.js";

init();

function init() {
  loadInitialPage();

  const main = document.querySelector("main");

  listeners.addMenuBtnListener();
  listeners.addInboxBtnListener(main);
  listeners.addTodayBtnListener(main);
}
