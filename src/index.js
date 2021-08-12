import "./styles.css";
import { loadInitialPage } from "./components/initial-page-load.js";

init();

function init() {
  loadInitialPage();
}

/*
TODO: fix styling
  fix add project styling

  if it has a due date show it
    if it's today it should say today
    if it's tomorrow it should say tomorrow
    if it passed, it should say overdue
    
  show the priority next to the due date

TODO: add checklists (squares)
BUG: clicking on stuff outside of task creation
TODO: save on local storage
TODO: add remove project (on hover)
*/
