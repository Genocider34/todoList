/* BUGS - NEED FIXING

  ADD FEATURES
  1. Add a checkbox from added task
  2. Add a delete icon from added task
  3. Add a completed task history page
  4. Add a edit icon from added ask
*/

// ELEMENTS
const input = document.querySelector(".input"); //txtbox
const list = document.querySelector(".list"); // div
const form = document.querySelector(".main-form"); // form
const check = document.querySelector(".check"); //tester

const data = [];

// localStorage.setItem("list", JSON.stringify(data.completeDb));
// let todoList = JSON.parse(localStorage.getItem("list"));

// const storedTodoList = localStorage.getItem("list");
// const todoList = storedTodoList ? JSON.parse(storedTodoList) : [];
// console.log(todoList);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usersInput = input.value.trim();
  if (usersInput !== "") {
    const item = document.createElement("div");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");
    trashIcon.style.color = "black";
    trashIcon.addEventListener("click", () => {
      list.removeChild(item);
      const index = list.indexOf[item];
      data.splice(index, 1);
    });

    checkbox.type = "checkbox";

    span.innerText = usersInput;
    item.classList.add("active");
    item.appendChild(checkbox);
    item.appendChild(span);
    item.appendChild(trashIcon);
    list.appendChild(item);
    input.value = "";

    data.push(item);
    // item.addEventListener("click", () => {
    //   list.removeChild(item);
    //   const index = data.indexOf(item); // the value of the selected task 'item'
    //   data.splice(index, 1); // deletes the selected task
    // });
  }
});

check.addEventListener("click", () => {
  console.log("*******************");
  data.forEach((x, i) => {
    console.log(`Task #${i + 1}: "${x.innerText}"`);
  });
  console.log("*******************");
});
