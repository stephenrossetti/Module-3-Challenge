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

var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var symbol = ["@","$","#","%","*","+","&","!","~","^","?",":",";","/",">","<","|"]


function generatePassword () {

  console.log("Button was clicked")
  var allCharacters = [];

  var userChoiceLength = parseInt(window.prompt("How many characeters would you like your password to contain? Must be least 8 characteres and no more than 128 chracters."));
  var length = userChoiceLength;
  if (isNaN(length) || length < 8 || length > 128 || length == " ") {
      return "Password length input was either not given, not between 8 and 128, not a numeric value, or prompt was cancelled. Please try again";
    }
  var userChoiceUpper = window.confirm("Click OK to confirm using uppercase letters.")
  if (userChoiceUpper) {allCharacters = allCharacters.concat(upper);}
  var userChoiceLower = window.confirm("Click OK to confirm using lowercase letters.")
  if (userChoiceLower) {allCharacters = allCharacters.concat(lower);}
  var userChoiceNumber = window.confirm("Click OK to confirm using numbers.")
  if (userChoiceNumber) {allCharacters = allCharacters.concat(number);}
  var userChoiceSymbol = window.confirm("Click OK to confirm using symbols.")
  if (userChoiceSymbol) {allCharacters = allCharacters.concat(symbol);}
  if (userChoiceUpper == false && userChoiceLower == false && userChoiceNumber == false && userChoiceSymbol == false) {
    return "No upper, lower, number or symbol selected. You need at least one character to make a password. Please try again."
  }

var password = "";
if (userChoiceUpper !== false) {password += upper[Math.floor(Math.random()*upper.length)];}
if (userChoiceLower !== false) {password += lower[Math.floor(Math.random()*lower.length)];}
if (userChoiceNumber !== false) {password += number[Math.floor(Math.random()*number.length)];}
if (userChoiceSymbol !== false) {password += symbol[Math.floor(Math.random()*symbol.length)];}

while(length>password.length) {
password += allCharacters[Math.floor(Math.random()*allCharacters.length)];
}

return password;
}
