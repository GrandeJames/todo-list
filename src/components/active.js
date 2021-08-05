export function setActive(element) {
  addActive(element);
}

function removeActive() {}
// TODO go through each menu item and remove active if there is

function addActive(element) {
  element.classList.add("active");
}
