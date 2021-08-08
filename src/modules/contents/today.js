import { addContentSection, loadContent } from "../content";

export function loadTodayContent() {
  loadContent(addTodayContent, document.querySelector("#today-container"));
}

function addTodayContent() {
  addContentSection("Today");
}
