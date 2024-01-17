// ELEMENTS
const input = document.querySelector(".input"); //txtbox
const button = document.querySelector(".add-btn"); //btn
const list = document.querySelector(".list"); // div
const form = document.querySelector(".main-form"); // form
const check = document.querySelector(".check"); //tester
const history = document.querySelector(".history-button"); // history button
let database = [];
let completeDb = [];

/* BUGS - NEED FIXING
  1. Database - When I click the first and middle portion of the 'task', the database array displays incorrectly
*/

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 1. Create a element div
  const task = document.createElement("div");

  // 2. Add the value of input to the created div
  task.innerText = input.value;

  // 3. Add the CSS logic of 'active' on 'task
  task.classList.add("active");

  // 4. Add the created div to the parent div (list)
  list.appendChild(task);

  // 5. Clears the input element whenever executes
  input.value = "";

  // 6. Add the 'task' to the 'database' array
  database.push(task);

  // 7. When the selected task is clicked, it removes on display
  task.addEventListener("click", () => {
    list.removeChild(task);
    database.pop(task);

    // 8. The selected task is added to the completed database
    completeDb.push(task);
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

export { completeDb };
