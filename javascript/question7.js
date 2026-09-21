
// Q7

let year=prompt("Enter your birth year: ");
let current_year=new Date().getFullYear();
let age=current_year - Number(year);
console.log(age)
if(age<18){
    alert("You may join the kids program");
}else if(age >= 18 &&  age <= 30 ){
    alert("You are eliigible . you may join other programs");
}else if( age > 30 && age < 60){
  alert("You are not eligible. you may join programs");
}else if(age > 60){
  alert("You may join the seniors program")
}