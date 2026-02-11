const generateBtn = document.querySelector(".generate-button");
const passwordPropInputs = document.querySelectorAll(".password-prop");
const rangeInput = document.querySelector(".range-input");
const charactersCount = document.querySelector(".characters-count");
const generatedPasswordElem = document.querySelector(".generated-password");
const strengthStatus = document.querySelector(".strength-status");

let passwordLength = 10;

function setPasswordProps() {
  const passwordProps = [];

  passwordPropInputs.forEach(function (passwordPropInput) {
    if (passwordPropInput.checked) {
      passwordProps.push(passwordPropInput.dataset.value);
    }
  });

  const password = generatePassword(passwordProps);
  generatedPasswordElem.innerHTML = password;

  showPasswordLevel(passwordProps);
}

function generatePassword(props) {
  const numbers = "0123456789";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!?@#$%^&*()}{]/,[";
  let userPasswordCharsText = "";

  let password = "";

  props.forEach(function (prop) {
    if (prop === "uppercase") {
      userPasswordCharsText += upperCaseLetters;
    } else if (prop === "lowercases") {
      userPasswordCharsText += lowerCaseLetters;
    } else if (prop === "numbers") {
      userPasswordCharsText += numbers;
    } else if (prop === "symbols") {
      userPasswordCharsText += symbols;
    }
  });

  for (let i = 0; i < passwordLength; i++) {
    password +=
      userPasswordCharsText[
        Math.floor(Math.random() * userPasswordCharsText.length)
      ];
  }

  return password;
}

function setPasswordLength(event) {
  passwordLength = event.target.value;
  charactersCount.innerHTML = passwordLength;
}

function showPasswordLevel(passwordProps) {
  switch (passwordProps.length) {
    case 1: {
      strengthStatus.className = "strength-status very-bad";
      break;
    }
    case 2: {
      strengthStatus.className = "strength-status bad";
      break;
    }
    case 3: {
      strengthStatus.className = "strength-status good";
      break;
    }
    case 4: {
      strengthStatus.className = "strength-status strong";
      break;
    }

    default: {
      // Codes
    }
  }
}

generateBtn.addEventListener("click", setPasswordProps);
rangeInput.addEventListener("change", setPasswordLength);
