function alphabetMessage() {
    alert('Welcome to the alphabet message Enter capital letter from A to E');
  let input = prompt("Enter a letter: ");
  

  switch(input) {
    case 'A':
      output = "A for apple";
      break;
    case 'B':
      output = "B for ball";
      break;
    case 'c':
      output = "C for cat";
      break;
    case 'D':
      output = "D for dog";
      break;
    case 'E':
      output = "E for elephant";
      break;
    default:
      alert("Invalid input");
  }

  document.body.innerHTML = `<h2>${output}</h2>`;
}

alphabetMessage();
