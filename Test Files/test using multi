// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = " !#$%&()'*+,-./:;<=>?@[\]^_`{|}~";
var allCharacters = upper + lower + number + symbol;

function generatePassword () {

  console.log("Button was clicked")

  var allUserChoices = [];
  var userChoiceLength = parseInt(window.prompt("How many characeters would you like your password to contain? Must be least 8 characteres and no more than 128 chracters."));
  var length = userChoiceLength;
  if (isNaN(userChoiceLength) || userChoiceLength < 8 || userChoiceLength > 128 || userChoiceLength == " ") {
      return "Password length input was either not given, not between 8 and 128, not a numeric value, or prompt was cancelled. Please try again";
    }
  if (window.confirm("Click OK to confirm using uppercase letters.")) {
      allUserChoices = allUserChoices.concat(upper)
    }
  if (window.confirm("Click OK to confirm using lowercase letters.")) {
      allUserChoices = allUserChoices.concat(lower)
    }
  if (window.confirm("Click OK to confirm using numbers.")) {
      allUserChoices = allUserChoices.concat(number)
    }
  if (window.confirm("Click OK to confirm using symbols.")) {
      allUserChoices = allUserChoices.concat(symbol)
    }

var password = "";
password += upper[Math.floor(Math.random()*upper.length)];
password += lower[Math.floor(Math.random()*lower.length)];
password += number[Math.floor(Math.random()*number.length)];
password += symbol[Math.floor(Math.random()*symbol.length)];

while(length>password.length) {
password += allCharacters[Math.floor(Math.random()*allCharacters.length)];
}

return password;
}

