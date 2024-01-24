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
  deleteData(trashIcon, newLI);
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
    const itemId = li.dataset.itemId; // get the ID of the item to be deleted from the dataset
    data = data.filter((item) => item.id !== parseInt(itemId)); // filter out the item with the matching ID
    console.log(data); // log the updated data array
    console.log(data);
  });
}

// Currently in-progress
function completedData(task) {
  task.addEventListener("click", () => {
    const deleteID = 1;
    data.filter((item) => item.id !== deleteID);
    console.log(data);

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
