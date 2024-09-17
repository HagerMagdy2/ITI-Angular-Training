let message= prompt(`Enter The Message`);
console.log(message)

for(let i=1;i<=6;i++){

  document.writeln(  "<h" + i + ">" + message + " "+ i + "</h" + i + ">")
}