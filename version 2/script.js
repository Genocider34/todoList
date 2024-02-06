// ------------------------ QUOTES -----------------------------//

// --------------------------- TIME ---------------------------//
function myTime() {
  const time = document.querySelector(".time");

  setInterval(() => {
    let currentTime = new Date();
    time.innerHTML = currentTime.toLocaleTimeString();
  }, 1000);
}

// ---------------- TO DO LIST --------------------//

// ELEMENTS
const mainSection = document.querySelector("main");
const input = document.querySelector("input");
const form = document.querySelector("form");

// VAR
let data = [];
// let section = document.querySelector("section");

// ICONS
const UNCHECK = "fa-regular fa-circle";
const CHECK = "fa-regular fa-circle-check";

// renderToDo();

// Form Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  createList();
  renderToDo();
});

function createList() {
  const inputValue = input.value.trim();
  const isDuplicate = data.some(({ task }) => task == inputValue);
  const isEmpty = inputValue !== "";

  if (isEmpty && !isDuplicate) {
    // Clear's input
    input.value = "";

    data.push({
      task: inputValue,
      checked: false,
    });
  }
  // Render List
  function renderToDo() {
    mainSection.innerHTML = "";
    data.forEach((todo, index) => {
      mainSection.innerHTML += `
    <section id="${index}">
      <div class="list">
        <div class="information" >
          <i class=" ${todo.checked ? CHECK : UNCHECK}"></i>
          <span>${todo.task}</span>
        </div>
  
        <div class="icons">
          <i class="fa-solid fa-pen-to-square" data-action="edit"></i>
          <i class="fa-solid fa-trash" data-action="delete"></i>
        </div>
      </div>
    </section>`;
    });
    // completeTodo();
  }

  // Add event Listener to elements
  section.addEventListener("click", (e) => {
    const target = e.target;
    console.log(target);
  });

  // createList();
  // myTime()
}
