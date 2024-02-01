const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
let data = [];
let tempID = 1;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputUser = input.value.trim();

  if (inputUser !== "") {
    const li = document.createElement("LI");
    li.textContent = inputUser;
    ul.appendChild(li);
    for (let i = 0; i <= data.length; i++) {
      tempID += data[i].id;
    }
    data.push({ id: tempID, item: inputUser });
    console.log(data);
    input.value = "";
  }
});
