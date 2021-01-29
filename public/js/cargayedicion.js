const $menuNuevo = document.querySelector('#menunuevo');
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

}