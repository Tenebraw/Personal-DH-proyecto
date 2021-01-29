//Menu 
const $btnMenu = document.querySelector('#btn-menu');
const $options = document.querySelector('#options-menu');

function desplegarMenu() {
    $options.classList.toggle('desplegado');
    $options.classList.toggle('oculto')

}

$btnMenu.addEventListener("click", desplegarMenu);


// function Buscar


/*function desplegarSearch() {

    //const $searchbar = document.querySelector('.search-input');
    document.querySelector('#search-input2').classList.toggle('visible');
    document.querySelector('#search-input2').classList.toggle('oculto');
    //document.querySelector('#search-input').style = 'none';

}*/

const $btnSearch = document.querySelector('#search-full');
const $formSearch = document.querySelector('#search-input2');

function desplegarSearch() {
    $formSearch.classList.toggle('visible');
    $formSearch.classList.toggle('oculto');
    //document.querySelector('#search-input2').classList.toggle('visible');


}

$btnSearch.addEventListener("click", desplegarSearch);



//////////////////////////////////////////

function cerrarNav() {
    document.querySelector('#options-menu').classList.toggle('desplegado');
    document.querySelector('#options-menu').classList.toggle('oculto');


}

// Slidesshow Intro

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

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


//DestacadosSlides

let destacadosslideIndex = 1;
destacadosshowSlides(destacadosslideIndex);

function destacadosplusSlides(n) {
    destacadosshowSlides(destacadosslideIndex += n);
}

function destacadosshowSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mydestacadosSlides");
    if (n > slides.length) { destacadosslideIndex = 1 }
    if (n < 1) { destacadosslideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[destacadosslideIndex - 1].style.display = "block";
}

//OfertasSlides

let saleslideIndex = 1;
saleshowSlides(saleslideIndex);

function saleplusSlides(n) {
    saleshowSlides(saleslideIndex += n);
}

function saleshowSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mysaleSlides");
    if (n > slides.length) { saleslideIndex = 1 }
    if (n < 1) { saleslideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[saleslideIndex - 1].style.display = "block";
}

//ProductSlides

let clothesslideIndex = 1;
productshowSlides(clothesslideIndex);

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

//BijouxSlides

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

//HomeSlides

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

// Ofertas y Destacado display.


const $ofertasshow = document.querySelector("#ofertas-show");
const $ofertas = document.querySelector("#ofertas");
const $destacados = document.querySelector('#destacado');
const $destacadosshow = document.querySelector('#destacados-show');

function desplegarShow() {
    $ofertas.style.display = 'block';
    $destacados.style.display = 'none';
}
$ofertasshow.addEventListener("click", desplegarShow);

function desplegarShowDestacado() {
    $ofertas.style.display = 'none';
    $destacados.style.display = 'block';
}
$destacadosshow.addEventListener("click", desplegarShowDestacado);