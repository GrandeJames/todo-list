import { addHeader } from "../layouts/header";
import { addSidebar } from "../modules/sidebar";
import { Project } from "./project";
import { projects } from "../modules/projects";

import { addAddProjectListener } from "../modules/events";

import { loadInitialContent } from "../modules/content";

export function loadInitialPage() {
  const body = document.querySelector("body");
  const main = document.createElement("main");

  addHeader(body);

  body.appendChild(main);

  addSidebar();

  addAddProjectListener();

  loadInitialContent("Inbox");
}
