//Menu 
const $btnMenu = document.querySelector('#btn-menu');

const $options = document.querySelector('#options-menu');

function desplegarMenu() {
    $options.classList.toggle('desplegado');
    $options.classList.toggle('oculto')

}

$btnMenu.addEventListener("click", desplegarMenu);


// function Buscar


function desplegarSearch() {

    const $searchbar = document.querySelector('.search-input');
    $searchbar.classList.toggle('showme');
    $searchbar.classList.toggle('invisible');

}



//////////////////////////////////////////

function cerrarNav() {
    document.querySelector('#options-menu').classList.toggle('desplegado');
    document.querySelector('#options-menu').classList.toggle('oculto');


}



// Slidesshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//ProductSlides



let clothesslideIndex = 1;
productshowSlides(clothesslideIndex);

// Next/previous controls
function clothesplusSlides(n) {
    productshowSlides(clothesslideIndex += n);
}



function productshowSlides(n) {
    let i;
    let slides = document.querySelectorAll(".myclothesSlides");
    if (n > slides.length) { clothesslideIndex = 1 }
    if (n < 1) { clothesslideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[clothesslideIndex - 1].style.display = "block";
}

//Accesory Slides

// Next/previous controls


let accesoryslideIndex = 1;
accesoryshowSlides(accesoryslideIndex);

function accesoryplusSlides(n) {
    accesoryshowSlides(accesoryslideIndex += n);
}

function accesoryshowSlides(n) {
    let i;
    let slides = document.querySelectorAll(".myAccesorySlides");
    if (n > slides.length) { accesoryslideIndex = 1 }
    if (n < 1) { accesoryslideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[accesoryslideIndex - 1].style.display = "block";
}

//bijouxSlides

let bijouxslideIndex = 1;
bijouxshowSlides(bijouxslideIndex);

function bijouxplusSlides(n) {
    bijouxshowSlides(bijouxslideIndex += n);
}

function bijouxshowSlides(n) {
    let i;
    let slides = document.querySelectorAll(".myBijouxSlides");
    if (n > slides.length) { bijouxslideIndex = 1 }
    if (n < 1) { bijouxslideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[bijouxslideIndex - 1].style.display = "block";
}

//homeSlides

let homeslideIndex = 1;
homeshowSlides(homeslideIndex);

function homeplusSlides(n) {
    homeshowSlides(homeslideIndex += n);
}

function homeshowSlides(n) {
    let i;
    let slides = document.querySelectorAll(".myHomeSlides");
    if (n > slides.length) { homeslideIndex = 1 }
    if (n < 1) { homeslideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[homeslideIndex - 1].style.display = "block";
}