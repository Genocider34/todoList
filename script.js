// refactor icons to var
// fix local storage
// add a date
// add a checkbox and uncheck function
// add a refresh button

const elements = {
  form: document.querySelector("form"),
  ul: document.querySelector("ul"),
  data: [],
  tempID: 1,
};
let { form, ul, data, tempID } = elements;

// let data = JSON.parse(localStorage.getItem("dataStorage")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userValidation();
});

function userValidation() {
  const inputUser = form.elements[0].value; // string
  const withoutValue = form.elements[0];
  if (inputUser.trim() !== "") {
    const contents = {
      list: (newLI = document.createElement("LI")),
      trash: (trashIcon = document.createElement("i")),
      edit: (editIcon = document.createElement("i")),
      icons: (iconsContainer = document.createElement("DIV")),
      text: (span = document.createElement("SPAN")),
    };
    const { list, trash, edit, icons, text } = contents;

    trash.classList.add("fa-solid", "fa-trash");
    edit.classList.add("fa-solid", "fa-pen-to-square");

    text.innerText = inputUser;

    list.appendChild(text);
    icons.appendChild(edit);
    icons.appendChild(trash);
    list.appendChild(icons);
    ul.appendChild(list);

    createData(inputUser);
    form.elements[0].value = "";
    readData(text, newLI, tempID);
  }

  updateData(editIcon, newLI, withoutValue, inputUser, tempID);
  deleteData(trashIcon, tempID);
}

// ------------------CRUD Functions --------------------------
function createData(input) {
  for (let i = 0; i < data.length; i++) {
    tempID = data[i].id + 1;
  }
  data.push({
    id: tempID,
    item: input,
  });
  console.log(data);
  // localStorage.setItem("dataStorage", JSON.stringify(data));
}

function readData(task, list, id) {
  task.addEventListener("click", () => {
    // DOM
    list.remove();

    // Data Manipulation
    data = data.filter((item) => item.id !== id);
  });
}

function updateData(icon, task, input, inputUser, id) {
  icon.addEventListener("click", () => {
    // DOM
    task.remove();
    input.value = inputUser;
    input.focus();

    // Data Manipulation
    data = data.filter((item) => item.id !== id);
  });
}

function deleteData(icon, id) {
  icon.addEventListener("click", () => {
    // DOM
    icon.parentElement.parentElement.remove();

    // Data Manipulation
    data = data.filter((item) => item.id !== id);
    console.log(data);
  });
}
