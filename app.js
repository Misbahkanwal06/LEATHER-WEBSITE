
// // OUR PRODUCT PAGE

function Display(event) {
    let display_ing = document.getElementById('displaying');
    let img_container = document.getElementById('img-container');
    let getImage = event.src;
    img_container.src = getImage;
    display_ing.style.display = 'block';

    let productsCardContainer = document.getElementById('productsCardContainer');

    let x = document.getElementById('X');
    x.addEventListener('click', () => {
        display_ing.style.display = 'none';
        productsCardContainer.style.filter = "none";
    })
}


// QUALITY CONTROL
let btn = document.getElementById('btn');
btn.onclick = function () {
    window.location.href = "contact.html";
}

/* ??????????????????????? */

function angleUp() {

    // window.scrollTo(0,0);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// HOME PAGE
function viewMore() {
    window.location.href = "aboutus.html";
}

function viewMorePoducts() {
    window.location.href = "ourproduct.html";

}



// CAROUSEL
// $('.carousel .carousel-item').each(function () {
//     var minPerSlide = 4;
//     var next = $(this).next();

//     if (!next.length) {
//         next = $(this).siblings(':first');
//     }

//     next.children(':first-child').clone().appendTo($(this));

//     for (var i = 0; i < minPerSlide; i++) {
//         next = next.next();

//         if (!next.length) {
//             next = $(this).siblings(':first');
//         }

//         next.children(':first-child').clone().appendTo($(this));
//     }
// });

// Execute this code after your page has fully loaded
$(document).ready(function() {
    // Target the carousel and each carousel item
    $('.carousel .carousel-item').each(function () {
        // Clone the current carousel item and append it to the carousel
        $(this).clone().appendTo('.carousel-inner');
    });
});
