
// Input box 
let search = document.querySelector('.search');
// Add btn 
let btn = document.querySelector('.clicked');
// unordered list where all the todos come in 
let list = document.querySelector('.lists');
// Delete Btn
let deleted = document.querySelector('.delete');

// Button click to add an element 
btn.addEventListener('click', () => {
addingList();
})

// Delete btn onclick to delete 
deleted.addEventListener('click', ()=>{
deleteElement();
})

// Adding Click events to enter btn 
document.addEventListener('keydown', (e) => {
if (e.key == 'Enter') {
addingList();
}

if (e.key == 'Delete') {
deleteElement();
}
})

// To add element in the list 
function addElement() {
let elementNeeded = document.createElement('li');
elementNeeded.innerHTML = search.value;
list.appendChild(elementNeeded)
}

// Validation and adding the addElement function 
function addingList() {
if (search.value == '') {
// If no element is added we need to alert a default one 
alert("Enter some input");
}
else {
addElement();
}

// To clear the value of the input 
search.value = ''
}

// Deleting the last element in the list item 
function deleteElement() {
const elements = list.getElementsByTagName('li');
if (elements.length > 0) {
list.removeChild(elements[elements.length - 1]);
}
}
