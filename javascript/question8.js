// Q8

  let word ="OrAnGe";
  
  function convert( word){
      let conv="";
      for(let x=0 ; x < word.length ; x++){
        if (word[x] === word[x].toLocaleLowerCase()){
            conv+=word[x].toLocaleUpperCase()
        }else{
            conv+=word[x].toLocaleLowerCase();
        }
      }
      return conv
  }

  console.log(convert(word))
