function myTime() {
  const time = document.getElementById("time");

  setInterval(() => {
    let currentTime = new Date();
    time.innerHTML = currentTime.toLocaleTimeString();
  }, 1000);
}

// ---------------- to do list --------------------//

// ELEMENTS
/* <i class="fa-solid fa-circle-check"></i> */
const mainSection = document.querySelector("main");
const input = document.querySelector("input");
const form = document.querySelector("form");
let data = [];
let idValue = 0;

function createList() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();
    const isDuplicate = data.some(({ task }) => task == inputValue);
    const isEmpty = inputValue !== "";

    if (isEmpty && !isDuplicate) {
      // Clear's input
      input.value = "";

      idValue++;
      data.push({
        task: inputValue,
        id: idValue,
        checked: false,
      });

      data.forEach(() => {
        createElements();
      });
    }
  });
}

// function completeTodo() {
//   const list = document.querySelector(".list");
//   list.addEventListener("click", (e) => {
//     data.forEach(() => {
//       const target = e.target;
//       console.log(target);
//     });
//     // const parentElement = target.parentElement;
//   });
// }

function createElements() {
  mainSection.innerHTML = "";

  data.forEach(({ task, id, checked }) => {
    mainSection.innerHTML += `
    <section>
      <div class="list" id="${id}">
        <div class="information" >
          <i class="fa-regular fa-circle"></i>
          <span>${task}</span>
        </div>
  
        <div class="icons">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash"></i>
        </div>
      </div>
    </section>`;
  });
  // completeTodo();
}

createList();
myTime();
