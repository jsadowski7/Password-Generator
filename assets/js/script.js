// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set variables for prompt questions 
var enter;
var askNumber;
var askCharacter;
var askUppercase;
var askLowercase;
var choices;

var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "_", "[", "]", "{", "}", ";", ":", "?", "/", ".", ",", "<", ">", "`", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Function that changes letters to Uppercase
var toUpper = function(x) {
  return x.toUpperCase();
}
// Variable for uppercase letters from function used above
var alpha2 = alpha.map(toUpper);


//checks prompts
function generatePassword() {
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
  else if (askNumber && askCharacter && askUppercase && askLowercase) {
    choices = character.concat(number, alpha, alpha2);
  }
  // Else if statements for 3 confirmed prompts and 1 Cancelled 
  else if (askNumber && askCharacter && askUppercase) {
    choices = character.concat(number, alpha2);
  }
  else if (askNumber && askCharacter && askLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (askCharacter && askLowercase && askUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (askNumber && askLowercase && askUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  // Else if statements for 2 confirmed prompts and 2 cancelled
  else if (askCharacter && askNumber) {
    choices = character.concat(number);
  }
  else if (askCharacter && askLowercase) {
    choices = character.concat(alpha);
  }
  else if (askCharacter && askUppercase) {
    choices = character.concat(alpha2);
  }
// Else if statements for 1 confirmed prompt
  else if (askCharacter) {
    choices = character;
  }
  else if (askNumber) {
    choices = number;
  }
  else if (askLowercase) {
    choices = alpha;
  }
  else if (askUppercase) {
    choices = alpha2;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // 'For' Statement?
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);