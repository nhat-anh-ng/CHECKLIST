const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){ //The constructor method is a special method of a class (item) for creating and initializing an object (createDiv) of that class.
        //create the item div
        this.createDiv(itemName); //A property of an execution context,reference to an object 
    }

    createDiv(itemName){
        //text area
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        //to do list area 
       let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        
        //editer button
       let editButton = document.createElement('button');
        editButton.innerHTML = "EDITER";
        editButton.classList.add('editButton');

        //remove btn
        let removeButton = document.createElement('button');
        removeButton.innerHTML = "SUPPRIMER";
        removeButton.classList.add('removeButton');
        
        //list area
        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        //edit input
        editButton.addEventListener('click', () => this.edit(input));

        //remove input
        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input){
        input.disabled = !input.disabled;
    }

    remove(item){
        container.removeChild(item);
    }
}
 //to show the list
function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => { //The keydown event is fired when a key is pressed.
    if(e.which == 13){
        check();
    }
}) 

//The keydown and keyup events provide a code indicating which key is pressed, while keypress indicates which character was entered. For example, a lowercase "a" will be reported as 65 by keydown and keyup, but as 97 by keypress. An uppercase "A" is reported as 65 by all events.