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

function  membershipType(){
    let membership_type=prompt("Enter your membership type (student / regular):");

    while ( membership_type !== "student" && membership_type !== "regular" ){
        membership_type = prompt("Enter your membership type (student / regular):");
    }
    return membership_type
}

// console.log(membershipType(membership_type));


function userData(){
    let name=prompt("Enter your Name");
    let membership_user = membershipType();
    let preferre_book=prompt("Do you prefer 'fiction' or 'non-fiction' book genre?");
    let specific_title =prompt("Enter the title of the book you want to borrow");
    
    let user=[name,membership_user , preferre_book , specific_title];

    for(let i=0 ; i< user.length ;i++){
        console.log(user[i])
    }
    
}



