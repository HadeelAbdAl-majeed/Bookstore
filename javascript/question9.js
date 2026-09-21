// Q9

let sentence="Coding Academy by Orange";

function camelCase(sentence){
    let word =sentence.split(" ");
    let result="";
    for (let i = 0; i < word.length; i++) {
    if (word[i].length > 0) {
      result += word[i][0].toUpperCase() + word[i].slice(1);
    }
  }
  return result;
}

console.log(camelCase(sentence))