const generateBtn = document.querySelector(".generate-button");
const passwordPropInputs = document.querySelectorAll(".password-prop");

function setPasswordProps() {
  const passwordProps = [];
  passwordPropInputs.forEach(function (passwordPropInput) {
    if (passwordPropInput.checked) {
      passwordProps.push(passwordPropInput.dataset.value);
    }
  });
  const password = generatePassword(passwordProps);
}
function generatePassword(props) {
  const numbers = "0123456789";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*(){}[/,]";
  let password = "";
  props.forEach(function (prop) {
    if (prop === "uppercase") {
      password += upperCaseLetters;
    } else if (prop === "lowercases") {
      password += lowerCaseLetters;
    } else if (prop === "numbers") {
      password += numbers
    } else if (prop === "symbols") {
      password += symbols
    }
    
    const passwordCreator = 
  });
  return password;
}
generateBtn.addEventListener("click", setPasswordProps);
