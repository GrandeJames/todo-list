export function activateMenuItem(menuItem) {
  deactivateAllMenuItems();
  addActiveToMenuItem(menuItem);
}

function deactivateAllMenuItems() {
  document.querySelectorAll(".menu-item").forEach(menuItem => {
    if (menuItem.classList.contains("active")) {
      menuItem.classList.remove("active");
    }
  });
}

function addActiveToMenuItem(menuItem) {
  menuItem.classList.add("active");
}
