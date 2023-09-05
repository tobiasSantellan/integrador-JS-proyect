const d = document;

const registerForm = d.querySelector("#register-form");
const nameInput = d.querySelector("#name");
const emailInput = d.querySelector("#email");
const passInput = d.querySelector("#password");
const successMessage = d.querySelector("#success-message");

const isEmpty = (input) => {
    return !input.value.trim().length;
  };
  

const isBetween = (input, min, max) => {
    return input.value.length >= min && input.value.length < max; 
  };
  

const isEmailValid = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(input.value.trim());
  };
  
const isPassSecure = (input) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(input.value.trim());
  };
  
 
const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.style.display = "block";
    error.textContent = message;
  };
  
const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");
    const error = formField.querySelector("small");
    error.textContent = "";
  };
  

const checkTextInput = (input) => {

    let valid = false;
    const minCharacters = 3;
    const maxCharacters = 25;
  
    if (isEmpty(input)) {
      showError(input, "Este campo es obligatorio");
      return;
    }
    if (!isBetween(input, minCharacters, maxCharacters)) {
      showError(
        input,
        `Este Campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`
      );
      return;
    }

    showSuccess(input);
    valid = true;
    return valid;
  };
  

const checkEmail = (input) => {

    let valid = false;
    if (isEmpty(input)) {
      showError(input, "El email es obligatorio");
      return;
    }
    if (!isEmailValid(input)) {
      showError(input, "El email no es válido");
      return;
    }
    showSuccess(input);
    valid = true;
    return valid;
  };
  
const checkPassword = (input) => {

    let valid = false;
    if (isEmpty(input)) {
      showError(input, "La contraseña es obligatoria");
      return;
    }
    if (!isPassSecure(input)) {
      showError(input, "La contraseña debe tener al menos 8 caracteres, una mayúscula y una minúscula");
      return;
    }
    showSuccess(input);
    valid = true;
    return valid;
  };
  
  
const validateForm = (e) => {
    e.preventDefault();
  
    let isNameValid = checkTextInput(nameInput);
    let isEmailValid = checkEmail(emailInput);
    let isPasswordValid = checkPassword(passInput);

  
    let isValidForm = 
    isNameValid &&
    isEmailValid &&
    isPasswordValid;
  
    if (isValidForm) {
      registerForm.classList.add("disabled");
      successMessage.classList.remove("disabled");
    }
  };

const init = () => {
    registerForm.addEventListener("submit", validateForm);
    nameInput.addEventListener("input", () => checkTextInput(nameInput));
    emailInput.addEventListener("input", () => checkEmail(emailInput));
    passInput.addEventListener("input", () => checkPassword(passInput));
  };
  
init();