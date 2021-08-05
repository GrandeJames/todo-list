import { loadToday } from "../contents/today.js";

export function addTodayBtnListener(parentElement) {
  const todayContainer = document.querySelector("#today-container");

  todayContainer.addEventListener("click", () => loadToday(parentElement));
}
