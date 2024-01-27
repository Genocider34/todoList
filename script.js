const form = document.querySelector("form");
const ul = document.querySelector("ul");
// data = JSON.parse(localStorage.getItem("data")) || [];
let data = [];
let tempID = 1;

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
      icons: (icons = document.createElement("DIV")),
      text: (span = document.createElement("SPAN")),
    };

    contents.trash.classList.add("fa-solid", "fa-trash");
    contents.edit.classList.add("fa-solid", "fa-pen-to-square");

    contents.text.innerText = inputUser;

    contents.list.appendChild(contents.text);
    contents.icons.appendChild(contents.edit);
    contents.icons.appendChild(contents.trash);
    contents.list.appendChild(contents.icons);
    ul.appendChild(contents.list);

    createData(inputUser);
    form.elements[0].value = "";
    readData(contents.text, newLI, tempID);
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
  // localStorage.setItem("data", JSON.stringify(data));
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
