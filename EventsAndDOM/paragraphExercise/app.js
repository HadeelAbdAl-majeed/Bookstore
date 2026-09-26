
let paragraph = document.getElementById("paragraph");
let textParagraph=paragraph.textContent
let words = textParagraph.split(/\s+/);


let paragraphWords = [];

for (let word of words) {
    if (word.length > 8) {
        // console.log(word);
     
        paragraphWords.push(`<span style="background-color: yellow;">${word}</span>`);
    } else {
      
        paragraphWords.push(word);
    }
}
console.log(paragraphWords.length+1);
document.getElementById("header").innerHTML+= " "+ (paragraphWords.length+1) +" words"
paragraph.innerHTML = paragraphWords.join(" ").replace(/\.\\,\ :،]/g, "");


let link =document.createElement("a");
link.href="https://google.com/";
link.innerHTML="Source Link";
paragraph.appendChild(link);


