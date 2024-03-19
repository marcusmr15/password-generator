function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberChars = '0123456789';
  var symbolChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  
  var allowedChars = '';
  
  if (includeLowercase) {
    allowedChars += lowercaseChars;
  }
  
  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }
  
  if (includeNumbers) {
    allowedChars += numberChars;
  }
  
  if (includeSymbols) {
    allowedChars += symbolChars;
  }
  
  var password = '';
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  
  return password;
}

var passwordAll = generatePassword(16, true, true, true, true);
var passwordNoLowercase = generatePassword(16, false, true, true, true);
var passwordNoUppercase = generatePassword(16, true, false, true, true);
var passwordNoNumbers = generatePassword(16, true, true, false, true);
var passwordNoSymbols = generatePassword(16, true, true, true, false);

var generateBtn = document.querySelector('#generate');
var passwordText = document.getElementById('password');

generateBtn.addEventListener("click", function () {
  var userInput;
  
  while (true) {
    userInput = prompt("Type '1' or '2', then click 'OK' according to your needs:\n\n- Type < 1 > to generate a random 16-digit password that includes uppercase, lowercase, numbers, and symbols.\n- Type < 2 > to set specific criteria for a password");

    if (userInput === null) {
      break;
    } else if (userInput === '') {
      alert("You need to type something... 😅"); 
    } else if (userInput === '1') {
      passwordText.value = passwordAll
      break;     
    } else if (userInput === '2') {
      setCriteria()
      break;
    } else {
      alert("Please just type the numbers 1 or 2\n*Include neither spaces nor symbols.");
    } 
  }
});

function setCriteria() {
  var userInput;

  while (true) {
    userInput = prompt('Type a number between 8 and 128 to select the number of characters in your password');

    if (userInput === null) {
      break;
    } else if (userInput === '') {
      alert("You need to type something... 😅");
    } else {
      userInput = parseInt(userInput); // Convert user input to a number
      if (userInput >= 8 && userInput <= 128) {
        console.log(userInput);
        includeLowercase()
        break;
      } else {
        alert("Please enter a number between 8 and 128.");
      }
    }
  }

  function includeLowercase() {
    alert('Do you want to include lowercase letters?')
  }

  function includeUppercase() {
    
  }

  function includeSymbols() {
    
  }

}

