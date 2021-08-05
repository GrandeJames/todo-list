import { addContentHeading } from "./content-heading.js";

export function addContentSection(parentElement, heading) {
  const section = document.createElement("section");

  section.className = "content-section";

  addContentHeading(section, heading);

  parentElement.appendChild(section);
}
