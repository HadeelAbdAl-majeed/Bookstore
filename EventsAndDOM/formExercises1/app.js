
let userName=document.getElementById("name");
let password=document.getElementById("pass");
let confirmPassword=document.getElementById("confirmPass");




function validateData(){
    let disabledButton=true;

    if(!userName.value){
         document.getElementById("error-messageUserName").textContent="Required";
        disabledButton=false;
    }else{
         document.getElementById("error-messageUserName").textContent=" ";  
         
    }

    if(!password.value){
         document.getElementById("error-messagePassword").textContent="Required";
         disabledButton=false;
    }else{
          document.getElementById("error-messagePassword").textContent=" ";
        
    }

    if(!confirmPassword.value){
          document.getElementById("error-messageConfirmPassword").textContent="Required";
          disabledButton=false;
    }else{
           document.getElementById("error-messageConfirmPassword").textContent=" ";
               
    }

     if(password.value !== confirmPassword.value){
        document.getElementById("error-message").textContent="password not match"  
    }else{
         document.getElementById("error-message").textContent=""
    }


    document.getElementById("submitButt").disabled = !disabledButton;
    
};

userName.addEventListener("input" , validateData);
password.addEventListener("input" , validateData);
confirmPassword.addEventListener("input" , validateData);



document.getElementById("formData").addEventListener('submit',function(event){
    event.preventDefault();
   validateData();
})
