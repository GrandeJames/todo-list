import { addContentSection } from "../content.js";
import { loadContent } from "../components/load-content.js";

export function loadToday(parentElement) {
  loadContent(
    () => addTodayContent(parentElement),
    document.querySelector("#today-container")
  );
}

function addTodayContent(parentElement) {
  addContentSection(parentElement, "Today");
}
