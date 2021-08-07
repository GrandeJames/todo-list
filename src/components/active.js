export function setActive(element) {
  removeActive();
  addActive(element);
}

function removeActive(selector) {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(menuItem => {
    if (menuItem.classList.contains("active")) {
      menuItem.classList.remove("active");
    }
  });
}

function addActive(element) {
  element.classList.add("active");
}
