// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let lengthPassword = prompt('How many characters would you like your password to be?', 14);
  
  while (isNaN(lengthPassword) || lengthPassword < 8 || lengthPassword > 120) {
    lengthPassword = prompt('Please enter a valid number between 8 and 120 for the password length:');
  }

  let lowerPassword = confirm('Would you like to include lowercase characters?');
  let upperPassword = confirm('Would you like to include uppercase characters?');
  let numericPassword = confirm('Would you like to include numeric characters?');
  let specialPassword = confirm('Would you like to include special characters?');

  return {
    length: parseInt(lengthPassword),
    hasLowercase: lowerPassword,
    hasUppercase: upperPassword,
    hasNumeric: numericPassword,
    hasSpecial: specialPassword
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var allChars = [];

  if (options.hasLowercase) {
    allChars = allChars.concat(lowerCasedCharacters);
  }

  if (options.hasUppercase) {
    allChars = allChars.concat(upperCasedCharacters);
  }

  if (options.hasNumeric) {
    allChars = allChars.concat(numericCharacters);
  }

  if (options.hasSpecial) {
    allChars = allChars.concat(specialCharacters);
  }

  if (allChars.length === 0) {
    alert('Please select at least one character.');
    return null;
  }

  var password = '';

  for (var i = 0; i < options.length; i++) {
    password += getRandom(allChars);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
