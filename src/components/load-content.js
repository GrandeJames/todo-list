import { setActive } from "./active.js";
import { removeCurrentContent } from "../content.js";

export function loadContent(addContent, element) {
  removeCurrentContent();
  addContent();
  setActive(element);
}
