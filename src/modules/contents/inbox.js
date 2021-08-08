import { addContentSection, loadContent } from "../content.js";

export function loadInboxContent() {
  loadContent(addInboxContent, document.querySelector("#inbox-container"));
}

function addInboxContent() {
  addContentSection("Inbox");
}
