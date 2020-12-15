//Slide Menu

let slideindice = 0;
carrousel();

function carrousel() {
    let i;
    let contenido = document.querySelectorAll('.slides');
    for (i = 0; i < contenido.length; i++) {
        contenido[i].style.display = "none";
    }
    slideindice++;
    if (slideindice > contenido.length) { slideindice = 1 }
    contenido[slideindice - 1].style.display = "block";
    setTimeout(carrousel, 3000); // Change image every 2 seconds
}



//Slide coffes
let index = 1;
Showcoffes(index);

function plusD(n) {
    Showcoffes(index += n);
}

function Showcoffes(n) {
    let i;
    let x = document.querySelectorAll(".slides-coffes");
    if (n > x.length) { index = 1 }
    if (n < 1) { index = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[index - 1].style.display = "block";
}


//Slide cups
let indice = 1;
Showcups(indice);

function pluscup(n) {
    Showcups(indice += n);
}

function Showcups(n) {
    let i;
    let x = document.querySelectorAll(".slides-cup");
    if (n > x.length) { indice = 1 }
    if (n < 1) { indice = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[indice - 1].style.display = "block";
}


//Random books -

let books = document.querySelectorAll('.order-books');
let books2 = document.querySelectorAll('.order-books2');
let books3 = document.querySelectorAll('.order-books3');
let books4 = document.querySelectorAll('.order-books4');
let books5 = document.querySelectorAll('.order-books5');
books.forEach(booksRandom);
books2.forEach(booksRandom);
books3.forEach(booksRandom);
books4.forEach(booksRandom);
books5.forEach(booksRandom);

function booksRandom(n) {
    n.style.order = Math.floor(Math.random() * books.length);
}