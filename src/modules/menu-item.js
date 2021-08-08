export function activateMenuItem(menuItem) {
  deactivateMenuItems();
  addActiveToMenuItem(menuItem);
}

function deactivateMenuItems() {
  document.querySelectorAll(".menu-item").forEach(menuItem => {
    if (menuItem.classList.contains("active")) {
      menuItem.classList.remove("active");
    }
  });
}

function addActiveToMenuItem(menuItem) {
  menuItem.classList.add("active");
}
