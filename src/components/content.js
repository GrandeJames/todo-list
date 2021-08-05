export function addContentSection(parentElement, heading) {
  const section = document.createElement("section");

  section.className = "content-section";

  addContentHeading(section, heading);

  parentElement.appendChild(section);
}

function addContentHeading(parentElement, heading) {
  const h1 = document.createElement("h1");

  h1.textContent = heading;

  parentElement.appendChild(h1);
}

export function removeCurrentContent() {
  if (document.querySelector(".content-section") !== null) {
    document.querySelector(".content-section").remove();
  }
}
