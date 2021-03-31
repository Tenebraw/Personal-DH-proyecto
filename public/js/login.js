// Validaciones front-end

let errors = {};

let emailLogin = document.getElementById('email');
let passwordLogin = document.getElementById('password');
let formlogin = document.getElementById('formlogin');

let validateEmail = function() {
    let feedback = '';
    if (validator.isEmpty(emailLogin.value, { ignore_whitespace: true })) {
        feedback = 'El campo email no puede estar vacio';
    } else if (!validator.isEmail(emailLogin.value)) {
        feedback = 'Ingrese un email valido';
    }
    handleFeedback(emailLogin, feedback);
}

let validatePassword = function() {
    let feedback = '';
    if (validator.isEmpty(passwordLogin.value, { ignore_whitespace: true })) {
        feedback = 'El password no puede estar vacio';
    }
    handleFeedback(passwordLogin, feedback);
}

let handleFeedback = function(element, feedback) {
    if (feedback) {
        element.classList.add('is-dangerfront');
        element.nextElementSibling.innerText = feedback;
        errors[element.name] = feedback;
        console.log(errors);
    } else {
        element.classList.remove('is-dangerfront');
        element.nextElementSibling.innerText = '';
        delete errors[element.name];
    }
}

emailLogin.addEventListener('blur', validateEmail);
passwordLogin.addEventListener('blur', validatePassword);

formlogin.addEventListener('submit', function(event) {
    validateEmail();
    validatePassword();

    if (Object.keys(errors).length) {
        event.preventDefault();
    }
})