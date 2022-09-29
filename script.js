// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set variables for prompt questions 
var askNumber;
var enter;
var askCharacter;
var askUppercase;
var askLowercase;

//checks prompts
function generatePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  enter = parseInt(prompt("How many characters would you like your password?"))
  if (!enter) {
    // If no input value 
    alert("Please enter a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Enter value between 8 and 128"));
  } else {
    // Prompt questions
    askNumber = confirm("Will this contain numbers?");
    askCharacter = confirm("Will this contain special characters?");
    askUppercase = confirm("Will this contain Uppercase letters?");
    askLowercase = confirm("Will this contain Lowercase letters?");
  }
// If statement for if no prompts are selected 
  if (!askNumber && !askCharacter && !askUppercase && !askLowercase) {
    choices = alert("You must choose a criteria");
  }
  //generate random string
  return randomString
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);