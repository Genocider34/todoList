const list = document.querySelector(".list");
const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const item = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  item.innerText = input.value;
  item.appendChild(checkbox);

  list.appendChild(item);
});
