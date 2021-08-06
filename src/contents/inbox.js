import { addContentSection } from "../content.js";
import { loadContent } from "../components/load-content.js";

export function loadInbox(parentElement) {
  loadContent(
    () => addInboxContent(parentElement),
    document.querySelector("#inbox-container")
  );
}

function addInboxContent(parentElement) {
  addContentSection(parentElement, "Inbox");
}
