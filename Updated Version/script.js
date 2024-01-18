// ELEMENTS
const input = document.querySelector(".input"); //txtbox
const list = document.querySelector(".list"); // div
const form = document.querySelector(".main-form"); // form
const check = document.querySelector(".check"); //tester
const history = document.querySelector(".history-button"); // history button

const data = {
  database: [],
  completeDb: [],
};

localStorage.setItem("list", JSON.stringify(data.completeDb));
let todoList = JSON.parse(localStorage.getItem("list"));

// const storedTodoList = localStorage.getItem("list");
// const todoList = storedTodoList ? JSON.parse(storedTodoList) : [];
// console.log(todoList);

/* BUGS - NEED FIXING
  1. Database - When I click the first and middle portion of the 'task', the database array displays incorrectly
*/

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 1. Create a element div
  const item = document.createElement("div");

  // 1.1 Create a input element
  // checkbox = document.createElement("input");

  // 1.2 Declare input type as a checkbox
  // checkbox.type = "checkbox";

  // 1.3 Append checkbox to newly created div (1)
  // item.appendChild(checkbox);

  // 2. Add the value of input to the created div
  item.innerText = input.value;

  // 3. Add the CSS logic of 'active' on 'task
  item.classList.add("active");

  // 4. Add the created div to the parent div (list)
  list.appendChild(item);

  // 5. Clears the input element whenever executes
  input.value = "";

  // 6. Add the 'task' to the 'database' array
  data.database.push(item);
  console.log(data);

  // 7. When the selected task is clicked, it removes on display
  item.addEventListener("click", () => {
    list.removeChild(item);
    data.database.pop(item);

    // 8. The selected task is added to the completed database
    data.completeDb.push(item);
  });
});

// check.addEventListener("click", () => {
//   database.forEach((x, i) => {
//     console.log(`Task #${i + 1}: ${x.innerText}`);
//   });

//   console.log("*******************");
//   completeDb.forEach((x, i) => {
//     console.log(`Task Completed #${i + 1}: ${x.innerText}`);
//   });
//   console.log("*******************");
// });

export { todoList };
