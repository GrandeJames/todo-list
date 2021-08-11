import { addHeader } from "../layouts/header";
import { addSidebar } from "../modules/sidebar";

import { addAddProjectListener } from "../modules/events";

import { loadPage } from "../modules/content";

export function loadInitialPage() {
  const body = document.querySelector("body");
  const main = document.createElement("main");

  addHeader(body);
  body.appendChild(main);

  addSidebar();
  loadPage(document.querySelector("#inbox-container"));

  addAddProjectListener();
}
