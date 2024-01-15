// Assignment code here

var button = document.getElementById("generate");


button.addEventListener("click", function() {
    var userInput;
    var defaultLength = 16;
    var upperCase = true;
    var lowerCase = true;
    var numbers = true;
    var symbols = true;

    while (true) {
      var userInput = prompt("Please type a number to generate a password!\n\n- Type '1' if you need to set specific criteria to be included in the password (special characters, lowercase/uppercase, etc.)\n\n- Type '2' to generate a random strong password");

      if (userInput === null) {
        console.log("No message inputted.");
        break;
      } else if (userInput === '') {
        alert("You need to type something... 😅");
      } else if (userInput === '1') {
        
        

      } else if (userInput === '2') {
        console.log("Your secure password is: ");
        alert("2!!!!");
        break;
      } else if (userInput !== '1' || userInput !== '2') {
        alert("Please type your response with only a 1 or a 2.\nAnd neither spaces nor single quotes(').");
      }
    }
});







 // Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

