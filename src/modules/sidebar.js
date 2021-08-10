import { toggleElement } from "../components/hide";

import { addMenuItemListener } from "./events";

export function addSidebar() {
  const aside = document.createElement("aside");

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  const button = document.createElement("button");

  const hr = document.createElement("hr");

  aside.id = "menu-container";

  div1.id = "inbox-container";
  div2.id = "today-container";
  div3.id = "projects-container";

  div1.className = "menu-item";
  div2.className = "menu-item";

  button.id = "add-project-button";

  div1.textContent = "Inbox";
  div2.textContent = "Today";

  button.textContent = "Add project";

  div3.appendChild(button);

  aside.appendChild(div1);
  aside.appendChild(div2);
  aside.appendChild(hr);
  aside.appendChild(div3);

  document.querySelector("main").appendChild(aside);

  addMenuItemListener(div1);
  addMenuItemListener(div2);
}

export function toggleSidebar() {
  toggleElement(document.querySelector("#menu-container"));
}
