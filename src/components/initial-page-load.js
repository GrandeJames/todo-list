import { addHeader } from "../layouts/header.js";
import { addSidebar } from "../modules/sidebar.js";
import { loadInboxContent } from "../modules/contents/inbox.js";

export function loadInitialPage() {
  const body = document.querySelector("body");
  const main = document.createElement("main");

  addHeader(body);
  body.appendChild(main);
  addSidebar();
  loadInboxContent();
}
