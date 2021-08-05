export function addContentHeading(parentElement, heading) {
  const h1 = document.createElement("h1");

  h1.textContent = heading;

  parentElement.appendChild(h1);
}
