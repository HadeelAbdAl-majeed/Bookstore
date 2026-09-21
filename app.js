let name=prompt("Enter your Name");

let membership_type=prompt("Enter your membership type (student / regular):");

console.log(membership_type)

if(membership_type === "student"){
    alert("Welcome, Scholar " + name );
}else if(membership_type === "regular"){
     alert("Welcome, Member " + name );
}else{
    alert("Welcome," + name );
}


let preferre_book=prompt("Do you prefer 'fiction' or 'non-fiction' book genre?");


let specific_title =prompt("Enter the title of the book you want to borrow");

alert( name + " Your requested book " + specific_title + " is being reserved.")

console.log("Name:" +"  " + name + " , " + "Requested Book Title: " + "  " +specific_title)