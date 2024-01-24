/* BUGS - NEED FIXING
  1. Checkbox -> Whenever the task or checkbox is hover, it must automatically checks the checkbox
  
  ADD FEATURES
  1. Add a completed task history page
  2. Edit Feature -> whenever the edit icon clicked, the selected task must be editable.
  3. Login and Register System
  4. Data Storage
  5. Add a tags feature
  6. Sort by tags or date created
  7. Display # of task completed
*/

// ELEMENTS
const input = document.querySelector(".input-user"); //txtbox
const form = document.querySelector(".main-form"); // form
const check = document.querySelector(".check"); //tester
const list = document.querySelector(".list"); // div

let data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let usersInput = input.value.trim(); //Prevents white spaces of input
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
    const id = data.length + 1;
    const dataAdd = [
      {
        id: id,
        item: span.innerText,
        isCompleted: false,
      },
    ];

    data.push(dataAdd);

    // events
    trashIcon.addEventListener("click", () => {
      const index = data.indexOf[item];
      data.splice(index, 1);
      data.isChecked = true;
      if (data.isChecked) {
        list.removeChild(item);
      }
    });
    console.log(data);

    // item.addEventListener("click", () => {
    //   list.removeChild(item);
    //   const index = data.indexOf[item]; // the element(array) of the selected task 'item'
    //   data.splice(index, 1); // deletes the selected task.
    // });

    editIcon.addEventListener("click", () => {
      input.value = span.innerText;
      span.innerText = input.value;
      list.removeChild(item);
      const index = data.indexOf[item];
      data.splice(index, 1);
      input.focus();
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
