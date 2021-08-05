import { loadInbox } from "../contents/inbox.js";

export function addInboxBtnListener(parentElement) {
  const inboxContainer = document.querySelector("#inbox-container");

  inboxContainer.addEventListener("click", () => loadInbox(parentElement));
}
