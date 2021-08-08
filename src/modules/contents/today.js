import { addContentSection, loadContent } from "../content";

export function loadTodayContent() {
  loadContent(
    addTodayContent,
    document.querySelector("#today-container"),
    "Today"
  );
}

function addTodayContent() {
  addContentSection("Today");
}
