import { addHeader } from "../layouts/header";
import { addSidebar } from "../modules/sidebar";
import { loadInboxContent } from "../modules/contents/inbox";

export function loadInitialPage() {
  const body = document.querySelector("body");
  const main = document.createElement("main");

  addHeader(body);
  body.appendChild(main);
  addSidebar();
  loadInboxContent();
}
