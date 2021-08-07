export function toggleElement(selector) {
  const element = document.querySelector(selector);

  if (!element.classList.contains("hidden")) {
    element.classList.add("hidden");
  } else {
    element.classList.remove("hidden");
  }
}
