
// Q7
// function number(){
//   for(let i=0;i <= 5; i++){
//     alert('The Number '+ i)
//   }
// }

// number()

// ----------------------------------------
// Q8

// function number(){
//   let result="";
//   for(let i=0;i <= 5; i++){
//     result+=i
//   }
//   alert("The Numbers " + result)
// }
// number()

// ---------------------------------------

// Q9
// function  multiplesOfThree(){
//   for(let i=0 ; i <=20 ; i++){
//     if(i % 3 === 0){
//       console.log(i)
//     }
//   }
// }

// multiplesOfThree();

// ---------------------------------------
// Q10 
// function rangeNumber(){
//   let number=Number(prompt("Enter the Number with range 0 to 100 "));
//   while(number < 0 || number > 100){
//     number=Number(prompt("Enter Again the Number with range 0 to 100 "));
//   }
//   console.log(number);
// }

// rangeNumber()

// -----------------------------------------

//Q11

 function rangeNumber(){
  let number=Number(prompt("Enter the Number with range 0 to 100 "));
  while(number < 0 || number > 100 ||  isNaN(number)){
    number=Number(prompt("Enter Again the Number with range 0 to 100 "));
  }
  console.log(number);
}

rangeNumber()

// -----------------------------------------

// Q12
// function sumNumber(){
//   let number=prompt("Enter a Number")
//   let sum=0;
//   for(let i=0; i <= number ;i++){
//     sum += i;
//   }
//   console.log(sum);
// }

// sumNumber();

// --------------------------------------
// Q13

// function averageNumber(){
//   let number=prompt("Enter a Number")
//   let sum=0;
//   let average=0;
//   let i=0
//   for(i; i <= number ;i++){
//     sum += i;
//   }
//   average= sum / i ;
//   console.log(average);
// }

// averageNumber()