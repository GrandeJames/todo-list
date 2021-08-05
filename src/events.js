import { loadInbox } from "./contents/inbox.js";
import { loadToday } from "./contents/today.js";

export function addInboxBtnListener(parentElement) {
  const inboxContainer = document.querySelector("#inbox-container");

  inboxContainer.addEventListener("click", () => loadInbox(parentElement));
}

export function addTodayBtnListener(parentElement) {
  const todayContainer = document.querySelector("#today-container");

  todayContainer.addEventListener("click", () => loadToday(parentElement));
}

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
