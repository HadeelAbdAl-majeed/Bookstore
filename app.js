
// First Task
// let name=prompt("Enter your Name");

// let membership_type=prompt("Enter your membership type (student / regular):");

// console.log(membership_type)

// if(membership_type === "student"){
//     alert("Welcome, Scholar " + name );
// }else if(membership_type === "regular"){
//      alert("Welcome, Member " + name );
// }else{
//     alert("Welcome," + name );
// }


// let preferre_book=prompt("Do you prefer 'fiction' or 'non-fiction' book genre?");


// let specific_title =prompt("Enter the title of the book you want to borrow");

// alert( name + " Your requested book " + specific_title + " is being reserved.")

// console.log("Name:" +"  " + name + " , " + "Requested Book Title: " + "  " +specific_title)
// =================================================================


// Second task

// function  membershipType(){
//     let membership_type=prompt("Enter your membership type (student / regular):");

//     while ( membership_type !== "student" && membership_type !== "regular" ){
//         membership_type = prompt("Enter your membership type (student / regular):");
//     }
//     return membership_type
// }

// // console.log(membershipType(membership_type));


// function userData(){
//     let name=prompt("Enter your Name");
//     let membership_user = membershipType();
//     let preferre_book=prompt("Do you prefer 'fiction' or 'non-fiction' book genre?");
//     let specific_title =prompt("Enter the title of the book you want to borrow");
    
//     let user=[name,membership_user , preferre_book , specific_title];

//     for(let i=0 ; i< user.length ;i++){
//         console.log(user[i])
//     }
    
// }

// =================================================================



const studentArray = [];

const form = document.getElementById('formData');
const resultCard = document.getElementById('result-card');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const username = document.getElementById('name').value.trim();
  const membershipType = document.getElementById('membershipType').value;
  const bookGenre = document.getElementById('genre').value.trim();
  const bookTitle = document.getElementById('b-title').value.trim();


  const userData = [username, membershipType, bookGenre, bookTitle];
  console.log(userData);
  studentArray.push(userData);

  readData();
  form.reset();
});

function readData() {
  resultCard.innerHTML = '';

  const labels = ["User Name", "Membership Type", "Book Genre", "Book Title"];

  for (let i = 0; i < studentArray.length; i++) {
    const card = document.createElement('div');
    const currentStudent = studentArray[i];

  
    for (let j = 0; j < currentStudent.length; j++) {
      const p = document.createElement('p');
      p.innerHTML = `<strong>${labels[j]}:</strong> ${currentStudent[j]}`;
      card.appendChild(p);
    }


    resultCard.appendChild(card);
  }
}



