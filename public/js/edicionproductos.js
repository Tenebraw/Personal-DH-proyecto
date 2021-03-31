//Validacion front-end

let errors = {};

let nameedicionproduct = document.getElementById('name');
let priceedicionproduct = document.getElementById('price');
let descriptionedicionproduct = document.getElementById('description');

let formedicion = document.getElementById('edicion-form');

let validateName = function() {
    let feedback = '';
    if (validator.isEmpty(nameedicionproduct.value, { ignore_whitespace: true })) {
        feedback = 'El campo nombre no puede estar vacio';
    } else if (!validator.isLength(nameedicionproduct.value, { min: 5 })) {
        feedback = 'El nombre debe tener al menos 5 caracteres';
    }
    handleFeedback(nameedicionproduct, feedback);
}

let validatePrice = function() {
    let feedback = '';
    if (validator.isEmpty(priceedicionproduct.value, { ignore_whitespace: true })) {
        feedback = 'El campo precio no puede estar vacio';
    } else if (!validator.isLength(priceedicionproduct.value, { min: 2 })) {
        feedback = 'El precio debe tener al menos dos digitos';
    } else if (!validator.isNumeric(priceedicionproduct.value.trim())) {
        feedback = 'El valor ingresado tiene que ser un numero';
    }
    handleFeedback(priceedicionproduct, feedback);
}

let validateDescription = function() {
    let feedback = '';
    if (validator.isEmpty(descriptionedicionproduct.value, { ignore_whitespace: true })) {
        feedback = 'El campo descripcion no puede estar vacio';
    } else if (!validator.isLength(descriptionedicionproduct.value, { min: 10 })) {
        feedback = 'El campo descripcion tiene que ser de al menos 10 caracteres.'
    }
    handleFeedback(descriptionedicionproduct, feedback);

}

let handleFeedback = function(element, feedback) {

    if (feedback) {
        element.classList.add('is-dangerfront');
        element.parentElement.nextElementSibling.innerText = feedback;
        errors[element.name] = feedback;
        console.log(errors);
    } else {
        element.classList.remove('is-dangerfront');
        element.parentElement.nextElementSibling.innerText = '';
        delete errors[element.name];
    }
}

nameedicionproduct.addEventListener('blur', validateName);
priceedicionproduct.addEventListener('blur', validatePrice);
descriptionedicionproduct.addEventListener('blur', validateDescription);

formedicion.addEventListener('submit', function(event) {
    validateName();
    validatePrice();
    validateDescription();

    if (Object.keys(errors).length) {
        event.preventDefault();
    }
})