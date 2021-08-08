import { addContentSection, loadContent } from "../content";

export function loadInboxContent() {
  loadContent(
    addInboxContent,
    document.querySelector("#inbox-container"),
    "Inbox"
  );
}

function addInboxContent() {
  addContentSection("Inbox");
}
