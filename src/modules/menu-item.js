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

export function getActiveMenuItem() {
  const menuItems = Array.from(document.querySelectorAll(".menu-item"));

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].classList.contains("active")) {
      return menuItems[i];
    }
  }
}
