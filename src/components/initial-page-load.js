import { addHeader } from "../layouts/header";
import { addSidebar } from "../modules/sidebar";
import { loadInboxContent } from "../modules/contents/inbox";
import { Project } from "./project";
import { projects } from "../modules/projects";

import { addAddProjectListener } from "../modules/events";

export function loadInitialPage() {
  const body = document.querySelector("body");
  const main = document.createElement("main");

  addHeader(body);
  body.appendChild(main);
  addSidebar();
  addAddProjectListener();
  loadInboxContent();
}

export let inboxProject = new Project("Inbox");
export let todayProject = new Project("Today");

projects.push(inboxProject);
projects.push(todayProject);
