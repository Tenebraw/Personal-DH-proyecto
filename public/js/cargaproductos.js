//Validacion front-end

let errors = {};

let namecreationproduct = document.getElementById('name');
let pricecreationproduct = document.getElementById('price');
let descriptioncreationproduct = document.getElementById('description');

let formcreation = document.getElementById('creation-form');

let validateName = function() {
    let feedback = '';
    if (validator.isEmpty(namecreationproduct.value, { ignore_whitespace: true })) {
        feedback = 'El campo nombre no puede estar vacio';
    } else if (!validator.isLength(namecreationproduct.value, { min: 5 })) {
        feedback = 'El nombre debe tener al menos 5 caracteres';
    }
    handleFeedback(namecreationproduct, feedback);
}

let validatePrice = function() {
    let feedback = '';
    if (validator.isEmpty(pricecreationproduct.value, { ignore_whitespace: true })) {
        feedback = 'El campo precio no puede estar vacio';
    } else if (!validator.isLength(pricecreationproduct.value, { min: 2 })) {
        feedback = 'El precio debe tener al menos dos digitos';
    } else if (!validator.isNumeric(pricecreationproduct.value.trim())) {
        feedback = 'El valor ingresado tiene que ser un numero';
    }
    handleFeedback(pricecreationproduct, feedback);
}

let validateDescription = function() {
    let feedback = '';
    if (validator.isEmpty(descriptioncreationproduct.value, { ignore_whitespace: true })) {
        feedback = 'El campo descripcion no puede estar vacio';
    } else if (!validator.isLength(descriptioncreationproduct.value, { min: 10 })) {
        feedback = 'El campo descripcion tiene que ser de al menos 10 caracteres.'
    }
    handleFeedback(descriptioncreationproduct, feedback);
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

namecreationproduct.addEventListener('blur', validateName);
pricecreationproduct.addEventListener('blur', validatePrice);
descriptioncreationproduct.addEventListener('blur', validateDescription);

formcreation.addEventListener('submit', function(event) {
    validateName();
    validatePrice();
    validateDescription();

    if (Object.keys(errors).length) {
        event.preventDefault();
    }

})










/*const $menuNuevo = document.querySelector('#menunuevo');
const $optionsnuevo = document.querySelector('.form-onlynewproducts');

const $menuEdicion = document.querySelector('#menuedicion');
const $optionsEdicion = document.querySelector('.form-editproducts');

const $menuDelete = document.querySelector('#menudelete');
const $optionDelete = document.querySelector('.form-delete');

const $seleccionarMenu = document.querySelector('.seleccion-accion');


function NuevoProducto() {
    $optionsnuevo.classList.toggle('mostrarmenu');
    $optionsnuevo.classList.toggle('escondermenu');
    $seleccionarMenu.classList.toggle('escondermenu');


}

$menuNuevo.addEventListener("click", NuevoProducto);


function EdicionProducto() {
    $optionsEdicion.classList.toggle('mostrarmenu');
    $optionsEdicion.classList.toggle('escondermenu');
    $seleccionarMenu.classList.toggle('escondermenu');


}

$menuEdicion.addEventListener("click", EdicionProducto);


function DeleteProducto() {
    $optionDelete.classList.toggle('mostrarmenu');
    $optionDelete.classList.toggle('escondermenu');
    $seleccionarMenu.classList.toggle('escondermenu');
}
$menuDelete.addEventListener("click", DeleteProducto);


function newSelected() {
    const $check = document.querySelector('#category').value;
    console.log('hola');
    const $check2 = document.querySelector('#checkbox2');
    if ($check == "indumentaria") {
        $check2.style.display = 'block';

    }

}*/


///Validaciones front-EdicionProducto