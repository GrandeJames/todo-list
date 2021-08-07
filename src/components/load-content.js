import { setActive } from "./active.js";
import { removeCurrentContent } from "../content.js";
import { addNewTaskBtnListener } from "../events.js";

export function loadContent(addContent, element) {
  removeCurrentContent();
  addContent();
  setActive(element);
  addNewTaskBtnListener(document.querySelector(".content-section"));
}
