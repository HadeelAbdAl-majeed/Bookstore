

let inputItem=document.getElementById("add-item");
let button=document.getElementById("but");

 

button.addEventListener('click' , function(event){

    event.preventDefault();

    let item=document.createElement("li");
    let itemText=document.createElement("span");
    let deletButton=document.createElement("button");

    let inputText = inputItem.value;
     

     item.appendChild(itemText);
     itemText.textContent = inputText + " ";
     item.appendChild(deletButton);
     deletButton.textContent="Delete";
     document.getElementById("ul").appendChild(item);

    inputItem.value="";

    deletButton.addEventListener('click', function() {
        item.remove(); 
    });


})