import { addHeader } from "../layouts/header.js";
import { addSidebar } from "../sidebar.js";

export function loadPage() {
  const body = document.querySelector("body");
  const main = document.createElement("main");

  addHeader(body);

  body.appendChild(main);
  addSidebar(main);
}
