import { setActive } from "./active";

export function loadContent(addContent, element) {
  removeCurrentContent();
  addContent();
  setActive(element);
}

function removeCurrentContent() {
  if (document.querySelector(".content-section") !== null) {
    document.querySelector(".content-section").remove();
  }
}
