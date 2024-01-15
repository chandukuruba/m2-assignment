const form=document.getElementById("form")
const userNameInput = document.getElementById('name');
const userNameErrorMessage = document.getElementById('userNameErrorMessage');
const emailInput = document.getElementById('email');
const emailErrorMessage = document.getElementById('emailErrorMessage');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordInput = document.getElementById('password');
const passwordErrorMessage = document.getElementById('passwordErrorMessage');
const confirmPasswordInput = document.getElementById('conformPassword');
const passwordConfirmErrorMessage = document.getElementById('passwordConfirmErrorMessage');
const countrySelect = document.getElementById('country');
const countryErrorMessage = document.getElementById('countryErrorMessage');
const checkboxInput = document.getElementById('checkbox');
const termsErrorMessage = document.getElementById('termsErrorMessage');
const dateInput = document.getElementById('date');
const dateErrorMessage = document.getElementById('dateErrorMessage');
const genderInputs = document.querySelectorAll('input[type="radio"][name="gender"]');
const genderErrorMessage = document.getElementById('genderErrorMessage');
let selectedGender=""
const successMessage=document.getElementById("sucusse-message")

function validateName(){
    if (userNameInput.value ==="") {
        userNameErrorMessage.textContent = 'User Name is required.';
        userNameInput.classList.add("error")
    } else {
        userNameErrorMessage.textContent = '';
        userNameInput.classList.remove("error")
    }
}

userNameInput.addEventListener("blur",validateName)

// Email
function emailValidate() {
    if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
        emailErrorMessage.textContent = 'Enter a valid email address.';
        emailInput.classList.add("error")
    } else {
        emailErrorMessage.textContent = '';
        emailInput.classList.remove("error")
    }
}


emailInput.addEventListener("blur",emailValidate)

// Password
function passwordValidate() {
    const password = passwordInput.value;

    // Check if the password is at least 8 characters long
    const isLengthValid = password.length >= 8;

    // Check if the password includes a mix of uppercase, lowercase, numbers, and special characters
    const containsUppercase = /[A-Z]/.test(password);
    const containsLowercase = /[a-z]/.test(password);
    const containsNumber = /\d/.test(password);
    const containsSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    if (!isLengthValid || !(containsUppercase && containsLowercase && containsNumber && containsSpecialChar)) {
        passwordErrorMessage.textContent = 'Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters.';
        passwordInput.classList.add("error")
    } else {
        passwordErrorMessage.textContent = '';
        passwordInput.classList.remove("error")
    }
}


passwordInput.addEventListener("blur",passwordValidate)

// Confirm Password
function confirmPasswordValidator(){
    if ((confirmPasswordInput.value !== passwordInput.value) || (confirmPasswordInput.value ==="")) {
        passwordConfirmErrorMessage.textContent = 'Passwords do not match.';
        confirmPasswordInput.classList.add("error")
    } else {
        passwordConfirmErrorMessage.textContent = '';
        confirmPasswordInput.classList.remove("error")
    }

}

confirmPasswordInput.addEventListener("blur",confirmPasswordValidator)

    // Date
    function validateDate(){
        const isValidDate = !isNaN(Date.parse(dateInput.value));
        if (dateInput.value==="" || !isValidDate) {
            dateErrorMessage.textContent = 'Date is required.';
            dateInput.classList.add("error")
        } else {
            dateErrorMessage.textContent = '';
            dateInput.classList.remove("error")
        }
    }
    
        dateInput.addEventListener("blur",validateDate)
    
    // Gender
    const isAnyGenderSelected = Array.from(genderInputs).some(input => input.checked);

    // Country

    function validateCountry(){
        if (countrySelect.value === 'Select Country') {
            countryErrorMessage.textContent = 'Please select a country.';
            countrySelect.classList.add("error")
        } else {
            countryErrorMessage.textContent = '';
            countrySelect.classList.remove("error")
        }
    }

    countrySelect.addEventListener("blur",validateCountry)



    // Terms & Conditions
    function validateTerms(){
        if (!checkboxInput.checked) {
            termsErrorMessage.textContent = 'You must accept the Terms & Conditions.';
            checkboxInput.classList.add("error")
        } else {
            termsErrorMessage.textContent = '';
            checkboxInput.classList.remove("error")
        }
    
    }

    checkboxInput.addEventListener("change",validateTerms)


function onSubmitForm(e){
    e.preventDefault()
    if(userNameInput.value===""){
        userNameErrorMessage.textContent = 'User Name is required.';
        return;
    }
    if (emailInput.value===""){
        emailErrorMessage.textContent = 'Enter a valid email address.';
        return;
    }

    const password=passwordInput.value
    const isLengthValid = password.length >= 8;

    // Check if the password includes a mix of uppercase, lowercase, numbers, and special characters
    const containsUppercase = /[A-Z]/.test(password);
    const containsLowercase = /[a-z]/.test(password);
    const containsNumber = /\d/.test(password);
    const containsSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    if (!isLengthValid || !(containsUppercase && containsLowercase && containsNumber && containsSpecialChar)) {
        passwordErrorMessage.textContent = 'Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters.';
        return;
    } 

    if (passwordInput.value !== confirmPasswordInput.value){
        passwordConfirmErrorMessage.textContent = 'Passwords do not match.';
        return;
    }
    if (dateInput.value===""){
        dateErrorMessage.textContent = 'Date is required.';
        return;
    }
    if (!isAnyGenderSelected){
        genderErrorMessage.textContent="Gender is required. "
        return;
    }
    if (countrySelect.value==="Select Country"){
        countryErrorMessage.textContent = 'Please select a country.';
        return;
    }
    if (!checkboxInput.checked) {
        termsErrorMessage.textContent = 'You must accept the Terms & Conditions.';
        return;
    }

    userNameInput.value=""
    emailInput.value=""
    passwordInput.value=""
    confirmPasswordInput.value=""
    dateInput.value=""
    countrySelect.value="Select Counrty"
    dateInput.value=""
    checkboxInput.checked=false
    successMessage.classList.remove("dont-show")
    successMessage.classList.add("sucusse-message")



}
    
form.addEventListener("submit",onSubmitForm)