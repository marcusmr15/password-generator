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
      var randomPassword = generatePassword(16, true, true, true, true);
      passwordText.value = randomPassword;
      console.log('Your random password is = ' + randomPassword);
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
        console.log('Password length = ' + userInput);
        var includeLower = includeLowercaseF(); // Call includeLowercase and store the result
        var includeUpper = includeUppercaseF(); // Call includeUppercase and store the result
        var includeNumb = includeNumbersF();
        var includeSymb = includeSymbolsF();

        // Check if at least one character type is included
        if (!(includeLower || includeUpper || includeNumb || includeSymb)) {
          alert("ERROR!\nYou must include at least one character type (lowercase, uppercase, numbers, or symbols).");
          break; // Exit the loop if no character type is included
        }

        var specificPassword = generatePassword(userInput, includeLower, includeUpper, includeNumb, includeSymb); // Use the results in generatePassword
        passwordText.value = specificPassword; // Set the generated password
        console.log('Password with specific criteria is: ' + specificPassword)
        break;
      } else {
        alert("Please enter a number between 8 and 128.\n" + userInput + " does not meet the criteria requested.");
      }
    }
  }

  function includeLowercaseF() {
    while (true) {
      userInputLower = prompt("Do you want to include LOWERCASE in your password?\nType 'y' for YES or 'n' for NO.");
  
      if (userInputLower === null) {
        break;
      } else if (userInputLower === '') {
        alert("You need to type something... 😅");
      } else if (userInputLower === 'y') {
        console.log('Lowercase = YES')
        return true;
      } else if (userInputLower === 'n') {
        console.log('Lowercase = NO')
        return false;
      } else {
        alert("Please type only the letters < y >  or < n >.\nExclude symbols, spaces and uppercase.");
      }
    }    
  }

  function includeUppercaseF() {
    while (true) {
      userInputUpper = prompt("Do you want to include UPPERCASE in your password?\nType 'y' for YES or 'n' for NO.");
  
      if (userInputUpper === null) {
        break;
      } else if (userInputUpper === '') {
        alert("You need to type something... 😅");
      } else if (userInputUpper === 'y') {
        console.log('Uppercase = YES')
        return true;
      } else if (userInputUpper === 'n') {
        console.log('Uppercase = NO')
        return false;
      } else {
        alert("Please type only the letters < y >  or < n >.\nExclude symbols, spaces and uppercase.");
      }
    }    
  }

  function includeNumbersF() {
    while (true) {
      userInputNumb = prompt("Do you want to include NUMBERS in your password?\nType 'y' for YES or 'n' for NO.");
  
      if (userInputNumb === null) {
        break;
      } else if (userInputNumb === '') {
        alert("You need to type something... 😅");
      } else if (userInputNumb === 'y') {
        console.log('Numbers = YES')
        return true;
      } else if (userInputNumb === 'n') {
        console.log('Numbers = NO')
        return false;
      } else {
        alert("Please type only the letters < y >  or < n >.\nExclude symbols, spaces and uppercase.");
      }
    }    
  }

  function includeSymbolsF() {
    while (true) {
      userInputSymb = prompt("Do you want to include SYMBOLS in your password?\nType 'y' for YES or 'n' for NO.");
  
      if (userInputSymb === null) {
        break;
      } else if (userInputSymb === '') {
        alert("You need to type something... 😅");
      } else if (userInputSymb === 'y') {
        console.log('Symbols = YES')
        return true;
      } else if (userInputSymb === 'n') {
        console.log('Symbols = NO')
        return false;
      } else {
        alert("Please type only the letters < y >  or < n >.\nExclude symbols, spaces and uppercase.");
      }
    }    
  }
}
