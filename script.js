const form = document.querySelector("form");
const ul = document.querySelector("ul");
let data = [];
let tempID = 1;

// function dataCheck() {
//   data.forEach((x) => {
//     console.log(x);
//   });
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userValidation();
});

function userValidation() {
  const inputUser = form.elements[0].value; // string
  let newLI;
  let trashIcon;
  if (inputUser.trim() !== "") {
    newLI = document.createElement("LI"); //li
    trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");
    editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pen-to-square");

    newLI.innerText = inputUser; //li

    newLI.appendChild(editIcon);
    newLI.appendChild(trashIcon);
    ul.appendChild(newLI);
    form.elements[0].value = "";
    createData(inputUser);
  }

  completedData(newLI, tempID);
  deleteData(trashIcon, tempID);
}

// function updateData(task, input) {
//   task.innerText =
// }

function createData(input) {
  for (let i = 0; i < data.length; i++) {
    tempID = data[i].id + 1;
  }
  data.push({
    id: tempID,
    item: input,
  });

  // localStorage.setItem("dataLocal", JSON.stringify(data));
}
function deleteData(icon, id) {
  icon.addEventListener("click", () => {
    icon.parentElement.remove(); // deletes the append LI

    data = data.filter((item) => item.id !== id);
  });
}
function completedData(task, id) {
  task.addEventListener("click", () => {
    task.remove(); // deletes the append LI
    data = data.filter((item) => item.id !== id);
  });
}
