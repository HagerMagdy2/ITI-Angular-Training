let word= prompt(`Enter The Message`);
console.log(word)
let x =0;
for(let i=0;i<word.length;i++){
if(word[i]=='e'){
  x+=1;
}
}
document.writeln(`There is ${x} e's in the ${word}`)
console.log(`There is ${x} e's in the ${word}`)