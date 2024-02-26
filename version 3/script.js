const input = document.querySelector("[data-input]");
const form = document.querySelector("[data-form]");
const main = document.querySelector(".main");
let data = [];

form.addEventListener("click", (e) => {
  e.preventDefault();
  userValidation();
});

function userValidation() {
  let userInput = input.value.toLowerCase().trim();
  if (userInput !== "") {
    data.push({ item: userInput });
  }
  renderDisplay();
  input.value = "";
}

function renderDisplay() {
  main.innerHTML = "";
  data.forEach((todo, index) => {
    main.innerHTML += `
    <section id="${index}" class="task">
    <div class="container flex">
    <div class="task__block flex">
    <div class="task__check-item">
    <i class="items fa-solid fa-circle-check"></i>
    <span class="items task-item" data-task>${todo.item}</span>
    </div>
    <div class="task__delete-edit">
    <i class="items fa-solid fa-xmark"></i>
    <i class="items fa-solid fa-pen-to-square"></i>
    </div>
    </div>
    </div>
     </section>`;
  });
  let taskItem = document.querySelector("[data-task]");

  taskItem.addEventListener("click", () => {
    task.remove();
  });
}
