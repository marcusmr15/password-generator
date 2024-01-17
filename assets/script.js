function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberChars = '0123456789';
  var symbolChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  
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
console.log(passwordAll);
var passwordNoLowercase = generatePassword(16, false, true, true, true);
console.log(passwordNoLowercase);
var passwordNoUppercase = generatePassword(16, true, false, true, true);
console.log(passwordNoUppercase);
var passwordNoNumbers = generatePassword(16, true, true, false, true);
console.log(passwordNoNumbers);
var passwordNoSymbols = generatePassword(16, true, true, true, false);
console.log(passwordNoSymbols);


var generateBtn = document.querySelector('#generate');

generateBtn.addEventListener("click", function () {
  var userInput;
  var passwordText = document.getElementById('password');
  console.log(password);
      
  while (true) {
    var userInput = prompt("Hello!\nType either '1', '2' '3' '4' or '5', then the 'OK' button:\n\n- Type 1 if you need to exclude lowercases\n- Type 2 if you need to exclude uppercase\n- Type 3 if you need to exclude numbers\n- Type 4 if you need to exclude symbols\n- Type 5 to generate a random strong password.");

    if (userInput === null) {
      break;
    } else if (userInput === '') {
      alert("You need to type something... 😅"); 
    } else if (userInput === '1') {
      passwordText.value = passwordNoLowercase 
      break;     
    } else if (userInput === '2') {
      passwordText.value = passwordNoUppercase 
      break;     
    }else if (userInput === '3') {
       passwordText.value = passwordNoNumbers
    break;
    } else if (userInput === '4') {
       passwordText.value = passwordNoSymbols 
      break;     
   } else if (userInput === '5') {
     passwordText.value = passwordAll
     break;     
      } else if (userInput !== '1' || userInput !== '2' || userInput !== '3' || userInput !== '4' || userInput !== '5' || userInput !== '5') {
        alert("Please type either the numbers 1 or 2\n*Do not include spaces nor single quotes(').");
      } 
  }
});