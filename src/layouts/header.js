import MenuIcon from "../images/icons8-menu.svg";

export function addHeader(parentElement) {
  const header = document.createElement("header");
  const button = document.createElement("button");
  const img = document.createElement("img");

  button.id = "menu-button";
  img.id = "menu-icon";
  img.src = MenuIcon;

  button.appendChild(img);
  header.appendChild(button);
  parentElement.appendChild(header);
}
