//Menu 
const $btnMenu = document.querySelector('#btn-menu');
const $options = document.querySelector('#options-menu');

function desplegarMenu() {
    $options.classList.toggle('desplegado');
    $options.classList.toggle('oculto')

}
$btnMenu.addEventListener("click", desplegarMenu);

// function Buscar

const $btnSearch = document.querySelector('#search-full');
const $formSearch = document.querySelector('#search-input2');

function desplegarSearch() {
    $formSearch.classList.toggle('visible');
    $formSearch.classList.toggle('oculto');

}

$btnSearch.addEventListener("click", desplegarSearch);

//////////////////////////////////////////

function cerrarNav() {
    document.querySelector('#options-menu').classList.toggle('desplegado');
    document.querySelector('#options-menu').classList.toggle('oculto');
}