//Menu 
const $btnMenu = document.querySelector('#btn-menu');

const $options = document.querySelector('#options-menu');

//const $contentToHidden = document.querySelector('.main-send');

function desplegarMenu() {
    $options.classList.toggle('desplegado');
    $options.classList.toggle('oculto')
        //   $contentToHidden.classList.toggle('oculto')
}

$btnMenu.addEventListener("click", desplegarMenu);

//////////////////////////////////////////