import { loadContent } from "../components/load-content.js";
import { addContentSection } from "../components/content-section.js";

export function loadToday(parentElement) {
  loadContent(
    () => addTodayContent(parentElement),
    document.querySelector("#today-container")
  );
}

function addTodayContent(parentElement) {
  addContentSection(parentElement, "Today");
}
