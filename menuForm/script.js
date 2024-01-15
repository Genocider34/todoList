const ulist = document.querySelector(".list");
const textbox = document.querySelector(".txtbox");
const addButton = document.querySelector(".addBtn");
const deleteButton = document.querySelector(".deleteBtn");
const undoButton = document.querySelector(".undoBtn");
const checkButton = document.querySelector(".checkBtn");

// Data Storage
const mainDatabase = [];
const completedDb = [];
const removeDb = []; // for undo button

// NOTES:
// const deleteItemId = "1";
// deleted = mainDatabase.filter((item) => item.id !== deleteItemId);

let list; // li
let checkbox; // checkbox
let textSpan; // span

// This function allowed me to add a task on the list
const addingTask = () => {
  const input = textbox.value.trim(); // Avoids spaces
  if (input !== "") {
    // checkbox
    list = document.createElement("li"); // creates 'li' element
    checkbox = document.createElement("input"); // creates 'input' element
    checkbox.type = "checkbox"; // or checkbox.setAttribute('type','checkbox');
    list.appendChild(checkbox); // adds checkbox to the list ('li')

    // span
    textSpan = document.createElement("span"); // creates 'span' element
    textSpan.textContent = input; // Adds the content of newTextbox to span
    list.appendChild(textSpan); // adds "li" to the span

    // adding border bottom
    list.classList.add("listBorder"); // add border whenever the list is added

    // adding to the list
    ulist.appendChild(list);
    mainDatabase.push(input);
    textbox.value = "";
    isChecked();
  }
};

// This function allowed me to check if the checkbox is true or false. If true then the selected task is removed from the main database
const isChecked = () => {
  const checkboxes = ulist.querySelectorAll("input[type='checkbox']"); // calls all checkbox elements
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        const listRemove = checkbox.closest("li"); // finds the closest 'li' element from the cbox itself
        completedDb.push(listRemove);
        listRemove.remove(); // remove the selected task if it exist
      }
    });
  });
};

// ------------------------------- EVENTS -----------------------------------
checkButton.addEventListener("click", () => {
  console.log(`Main Database: ${mainDatabase}`);
  console.log(`Deleted Database: ${removeDb}`);
  console.log(`Completed Database: ${completedDb}`);
  console.log();
});

// Number 13 is "ENTER" key
textbox.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) addingTask();
});

addButton.addEventListener("click", addingTask);

undoButton.addEventListener("click", () => {
  mainDatabase.push(removeDb[removeDb.length - 1]);
  const undoTask = removeDb.pop(); // Get the last removed task from the removeDb array
  ulist.appendChild(undoTask); // Add the last removed task back to the list
});

deleteButton.addEventListener("click", function () {
  textbox.value = "";
  list = ulist.getElementsByTagName("li"); // Specify the 'li'
  const lastTask = list[list.length - 1];
  removeDb.push(lastTask); // Store the deleted task on the removeDb array
  ulist.removeChild(lastTask); // Deletes the last list

  mainDatabase.pop(lastTask);
});

export { completedDb };
