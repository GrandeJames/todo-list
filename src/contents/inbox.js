import { loadContent } from "../components/load-content.js";
import { addContentSection } from "../components/content-section.js";

export function loadInbox(parentElement) {
  loadContent(
    () => addInboxContent(parentElement),
    document.querySelector("#inbox-container")
  );
}

function addInboxContent(parentElement) {
  addContentSection(parentElement, "Inbox");
}
