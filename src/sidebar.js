export function addSidebar(parentElement) {
  const aside = document.createElement("aside");

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");

  aside.id = "menu-container";

  div1.id = "input-container";
  div2.id = "today-container";
  div3.id = "projects-container";

  div1.className = "menu-item";
  div2.className = "menu-item";
  div3.className = "menu-item";

  p1.textContent = "Inbox";
  p2.textContent = "Today";
  p3.textContent = "Projects";

  div1.appendChild(p1);
  div2.appendChild(p2);
  div3.appendChild(p3);

  aside.appendChild(div1);
  aside.appendChild(div2);
  aside.appendChild(div3);

  parentElement.appendChild(aside);
}

// TODO: add active to active menu item
// TODO: add icons to menu items
// TODO: add projects
// TODO: make it clickable and changes content

// Have own array for
