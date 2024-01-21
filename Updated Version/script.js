/* BUGS - NEED FIXING

  ADD FEATURES
  1. Add a checkbox from added task
  2. Add a delete icon from added task
  3. Add a completed task history page
  4. Add a edit icon from added ask
*/

// ELEMENTS
const input = document.querySelector(".input"); //txtbox
const form = document.querySelector(".main-form"); // form
const check = document.querySelector(".check"); //tester
const list = document.querySelector(".list"); // div
const data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usersInput = input.value.trim(); //Prevents white spaces of input
  if (usersInput !== "") {
    // divs
    const item = document.createElement("div");
    const textCb = document.createElement("div");
    const icons = document.createElement("div");

    // clickables
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    const trashIcon = document.createElement("i");
    const editIcon = document.createElement("i");

    // icon adding
    editIcon.classList.add("fa-solid", "fa-pencil");
    trashIcon.classList.add("fa-solid", "fa-trash");

    // others
    span.innerText = usersInput;
    input.value = "";

    // adding classes to the divs
    item.classList.add("item");
    textCb.classList.add("textCb");

    // appending
    list.appendChild(item);
    item.appendChild(textCb);
    textCb.appendChild(checkbox);
    textCb.appendChild(span);
    icons.appendChild(editIcon);
    icons.appendChild(trashIcon);
    item.appendChild(icons);

    /* ------------ OVERVIEW -----------------------
    <div class="list">
       <div class="item">
           <div class="textCb">
              <input type="checkbox" />
              <span></span>
            </div>
            <div class="icons">
              <i class="trash-icon" />
              <i class="edit-icon" />
            </div>
        </div>
    </div>
*/

    // Data manipulation
    data.push(textCb);

    // events
    trashIcon.addEventListener("click", () => {
      list.removeChild(item);
      const index = data.indexOf[item];
      data.splice(index, 1);
    });

    item.addEventListener("click", () => {
      list.removeChild(item);
      const index = data.indexOf(item); // the element(array) of the selected task 'item'
      data.splice(index, 1); // deletes the selected task.
    });
  }
});

// check.addEventListener("click", () => {
//   console.log("*******************");
//   data.forEach((x, i) => {
//     console.log(`Task #${i + 1}: "${x.innerText}"`);
//   });
//   console.log("*******************");
// });
