//Validaciones Front-End

let errors = {};
let nameRegister = document.getElementById('nombre');
let lastnameRegister = document.getElementById('apellido');
let emailRegister = document.getElementById('email');
let passwordRegister = document.getElementById('password');
let confirmationRegister = document.getElementById('passwordconfirmation');
let form = document.getElementById('formregister');

let validateName = function() {
    let feedback = '';
    if (validator.isEmpty(nameRegister.value, { ignore_whitespace: true })) {
        feedback = 'El nombre no puede estar vacio';
        console.log('mal nombre');
    } else if (!validator.isLength(nameRegister.value, { min: 5 })) {
        feedback = 'El nombre debe tener al menos 5 caracteres.'
        console.log('mas de 5');
    }
    handleFeedback(nameRegister, feedback);
}

let validateLastname = function() {
    let feedback = '';
    if (validator.isEmpty(lastnameRegister.value, { ignore_whitespace: true })) {
        feedback = 'El apellido no puede estar vacio';

    } else if (!validator.isLength(lastnameRegister.value, { min: 3 })) {
        feedback = 'El apellido debe tener al menos 3 caracteres.';
    }
    handleFeedback(lastnameRegister, feedback);
}

let validateEmail = function() {
    let feedback = '';
    if (validator.isEmpty(emailRegister.value, { ignore_whitespace: true })) {
        feedback = 'El campo email no puede estar vacio';
    } else if (!validator.isEmail(emailRegister.value)) {
        feedback = 'Ingrese un email valido';
    }
    handleFeedback(emailRegister, feedback);
}

let validatePassword = function() {
    let feedback = '';
    if (validator.isEmpty(passwordRegister.value, { ignore_whitespace: true })) {
        feedback = 'El password no puede estar vacio';
    } else if (!validator.isLength(passwordRegister.value, { min: 8 })) {
        feedback = 'El password debe tener al menos 8 caracteres';
    } else if (!validator.matches(passwordRegister.value, '[0-9]')) {
        feedback = 'El password debe contener al menos un numero';
    } else if (!validator.matches(passwordRegister.value, '[a-z]')) {
        feedback = 'El password debe contener al menos una letra minuscula';
    } else if (!validator.matches(passwordRegister.value, '[A-Z]')) {
        feedback = 'El password debe contener al menos una letra mayuscula';
    }
    handleFeedback(passwordRegister, feedback);
}

let validateConfirmation = function() {
    let feedback = '';
    if (validator.isEmpty(confirmationRegister.value, { ignore_whitespace: true })) {
        feedback = 'La confirmacion del password no puede estar vacia';
    } else if (!validator.isLength(confirmationRegister.value, { min: 8 })) {
        feedback = 'La confirmacion debe tener tambien al menos 8 caracteres';

    } else if (passwordRegister.value !== confirmationRegister.value) {
        feedback = 'El password y su confirmacion deben coincidir.';
    }
    handleFeedback(confirmationRegister, feedback);
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

nameRegister.addEventListener('blur', validateName);
lastnameRegister.addEventListener('blur', validateLastname);
emailRegister.addEventListener('blur', validateEmail);
passwordRegister.addEventListener('blur', validatePassword);
confirmationRegister.addEventListener('blur', validateConfirmation);

form.addEventListener('submit', function(event) {
    validateName();
    validateLastname();
    validateEmail();
    validatePassword();
    validateConfirmation();

    if (Object.keys(errors).length) {
        event.preventDefault();
    }

})