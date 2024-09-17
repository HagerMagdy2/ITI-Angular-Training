
  let x = 0;
  while (true) {
      const number = prompt("Enter the Number");
      const value = Number(number);

      if (value == 0) {
        alert(" Now Can Stop Thank You");
          break;
      }
      x += value;
      if (x > 100) {
          alert("Sum exceeds 100 ");
          break;
      }
  }

  document.writeln(`Total sum of entered values: ${x}`);
  console.log(`Total sum of entered values: ${x}`)



