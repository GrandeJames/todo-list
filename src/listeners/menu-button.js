export function addMenuBtnListener() {
  const menuButton = document.querySelector("#menu-button");

  menuButton.addEventListener("click", toggleSidebar);
}

function toggleSidebar() {
  const menuContainer = document.querySelector("#menu-container");

  if (!menuContainer.classList.contains("hidden")) {
    menuContainer.classList.add("hidden");
  } else {
    menuContainer.classList.remove("hidden");
  }
}
