import { loadHeader } from "../layouts/header";
import { loadSidebar } from "../modules/sidebar";
import { loadContentSection } from "../modules/content-section";

export function loadInitialPage() {
  const body = document.querySelector("body");
  loadHeader(body);

  const main = document.createElement("main");
  body.appendChild(main);

  loadSidebar(main);

  const inboxContainer = document.querySelector("#inbox-container");
  loadContentSection(inboxContainer);
}
