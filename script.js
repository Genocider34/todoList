const form = document.querySelector("form");
const ul = document.querySelector("ul");
let data = [];
function dataCheck() {
  data.forEach((x) => {
    console.log(x);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userValidation();
});

function userValidation() {
  const inputUser = form.elements[0].value;
  let newLI;
  let trashIcon;
  if (inputUser.trim() !== "") {
    newLI = document.createElement("LI");
    trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");

    newLI.innerText = inputUser;
    newLI.appendChild(trashIcon);
    ul.appendChild(newLI);
    form.elements[0].value = "";
    createData(inputUser);
    // dataCheck();
  }
  deleteData(trashIcon);
  // completedData(newLI);
}

// function updateData(task) {}

function deleteData(icon, li) {
  data.isDeleted = true;
  icon.addEventListener("click", () => {
    icon.parentElement.remove(); // deletes the append LI
    /* 
    This space deletes the selected data object when the event is click
    ->use the boolean
    */
    const deleteID = data.id;
    const filteredID = data.filter((x) => x.id !== deleteID); // if data.id=1 !== 1
    data = filteredID;
    console.log(data);
  });
}

// Currently in-progress
function completedData(task) {
  task.addEventListener("click", () => {
    task.remove(); // deletes the append LI

    /* 
    This space deletes the selected data object when the event is click
    ->use the boolean
    */
  });
}

// Done
function createData(input) {
  let idAdd = 1;
  for (let i = 0; i < data.length; i++) {
    idAdd = data[i].id + 1;
  }
  data.push({
    id: idAdd,
    item: input,
    isDeleted: false,
  });

  // localStorage.setItem("dataLocal", JSON.stringify(data));
}
