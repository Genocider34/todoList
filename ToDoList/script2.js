// EDITED ON LAPTOP

const list = document.querySelector('.list');
const textbox = document.querySelector('.txtbox');
const addButton = document.querySelector('.addBtn');
const deleteButton = document.querySelector('.deleteBtn');
const undoButton = document.querySelector('.undoBtn');
const database = [];
let removeDb = []; // for undo button
let newList; // li
let checkbox; // checkbox
let textSpan; // span

addButton.addEventListener('click', function (x){
    const newTextbox = textbox.value.trim();
    if(newTextbox !== ""){
        // checkbox
        newList = document.createElement('li');
        checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        newList.appendChild(checkbox);

        // span
        textSpan = document.createElement('span');
        textSpan.textContent = newTextbox;
        newList.appendChild(textSpan);

        // adding border bottom 
        newList.style.border = '1px solid black';
        newList.style.padding = '1em';

        // adding to the list
        list.appendChild(newList);
    

        database.push(newTextbox);
 
        textbox.value = "";
    }
});

undoButton.addEventListener('click', function (){
    const undoTask = removeDb.pop(); // Get the last removed task from the removeDb array
    list.appendChild(undoTask); // Add the last removed task back to the list
})

deleteButton.addEventListener('click', function (){
    textbox.value = "";
    newList = list.getElementsByTagName('li'); // Specify the 'li'
    const lastTask = newList[newList.length - 1];
    list.removeChild(lastTask); // Deletes the last list
    removeDb.push(lastTask); // Store the deleted task on the removeDb array
})

// function isCheckboxOK(){
//     if(checkbox.checked == false){
//         newList = list.getElementsByTagName('li')[0];
//         list.removeChild(newList);
//     }
// }