import MenuIcon from "../images/icons8-menu.svg";
import { addMenuBtnListener } from "../modules/events";

export function loadHeader(parentElement) {
  addHeader(parentElement);
  addHeaderListeners();
}

function addHeader(parentElement) {
  const header = document.createElement("header");

  addMenuButton(header);

  parentElement.appendChild(header);
}

function addMenuButton(parentElement) {
  const button = document.createElement("button");
  button.id = "menu-button";

  addMenuIcon(button);

  parentElement.appendChild(button);
}

function addMenuIcon(parentElement) {
  const img = document.createElement("img");

  img.id = "menu-icon";
  img.src = MenuIcon;

  parentElement.appendChild(img);
}

function addHeaderListeners() {
  addMenuBtnListener();
}
