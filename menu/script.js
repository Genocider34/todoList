export { completedDb };

const list = document.querySelector(".list");
const textbox = document.querySelector(".txtbox");
const addButton = document.querySelector(".addBtn");
const deleteButton = document.querySelector(".deleteBtn");
const undoButton = document.querySelector(".undoBtn");

// Data Storage
const mainDatabase = [];
const completedDb = [];
const removeDb = []; // for undo button

let newList; // li
let checkbox; // checkbox
let textSpan; // span

const addingTask = () => {
  const newTextbox = textbox.value.trim(); // Avoids spaces
  if (newTextbox !== "") {
    // checkbox
    newList = document.createElement("li");
    checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // or checkbox.setAttribute('type','checkbox');
    newList.appendChild(checkbox); // adds checkbox to the list ('li')

    // span
    textSpan = document.createElement("span");
    textSpan.textContent = newTextbox;
    newList.appendChild(textSpan);

    // adding border bottom
    newList.style.border = "1px solid black";
    newList.style.borderRadius = "12px";
    newList.style.marginBottom = "1em";
    newList.style.padding = "1em";

    // adding to the list
    list.appendChild(newList);
    mainDatabase.push(newTextbox);
    console.log(mainDatabase);
    textbox.value = "";
    isChecked();
  }
};

const isChecked = () => {
  const checkboxes = list.querySelectorAll("input[type='checkbox']");
  newList = list.getElementsByTagName("li");
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked === true) {
        const listItemToRemove = newList[index];
        list.removeChild(listItemToRemove);
        console.log(`${index + 1}: ${mainDatabase[index]} is Completed`);
        completedDb.push(mainDatabase[index]);
        mainDatabase.pop();
        console.log(`Completed Database: ${completedDb}`);
        console.log(mainDatabase);
      }
    });
  });
};

textbox.addEventListener("keypress", function (event) {
  // Number 13 is "ENTER" key
  if (event.keyCode === 13) {
    addingTask();
  }
});
addButton.addEventListener("click", function () {
  addingTask();
});
undoButton.addEventListener("click", function () {
  mainDatabase.push(removeDb[removeDb.length - 1]);
  console.log(mainDatabase);
  const undoTask = removeDb.pop(); // Get the last removed task from the removeDb array

  list.appendChild(undoTask); // Add the last removed task back to the list
});
deleteButton.addEventListener("click", function () {
  textbox.value = "";
  newList = list.getElementsByTagName("li"); // Specify the 'li'
  const lastTask = newList[newList.length - 1];
  list.removeChild(lastTask); // Deletes the last list
  removeDb.push(lastTask); // Store the deleted task on the removeDb array
  mainDatabase.pop(lastTask);
  console.log(mainDatabase);
});
