import { addContentSection, loadContent } from "../content";

import { loadTasks } from "../tasks";

export function loadInboxContent() {
  loadContent(
    addInboxContent,
    document.querySelector("#inbox-container"),
    "Inbox"
  );

  loadTasks();
}

function addInboxContent() {
  addContentSection("Inbox");
}
