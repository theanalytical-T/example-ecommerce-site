

const menuBtn = document.querySelector('.menu-btn')

let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        document.querySelector(".overlay").style.display = "block";
        document.querySelector(".nav-links").style.display = "block";
        // document.querySelector(".menu").style.display = "block";

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".nav-links").style.display = "none";
        // document.querySelector(".menu").style.display = "none";
    }
});


// const slides = document.getElementsByClassName('carousel-item');
// let slidePosition = 0;
// const totalSlides = slides.length;

// document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
// document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

// function hideAllSlides() {
//     for (let slide of slides) {
//         slide.classList.remove('carousel-item-visible');
//         slide.classList.add('carousel-item-hidden');
//     }
// }

// function moveToNextSlide() {
//     hideAllSlides();

//     if (slidePosition === totalSlides - 1) {
//         slidePosition = 0;
//     } else {
//         slidePosition++;
//     }

//     slides[slidePosition].classList.add("carousel-item-visible");
// }

// function moveToPrevSlide() {
//     hideAllSlides();

//     if (slidePosition === 0) {
//         slidePosition = totalSlides - 1;
//     } else {
//         slidePosition--;
//     }

//     slides[slidePosition].classList.add("carousel-item-visible");
// }



// for (let hashtag = "#"; hashtag.length < 8; hashtag += "#") {
//     console.log(hashtag);
//     break;
// }

// for (let counter = 0; counter.length < 101; counter++) {
//     if (counter % 3 === 0) {
//         console.log("Fizz");
//     } else if (counter % 5 === 0) {
//         console.log("Buzz");
//     } else if (counter % 3 === 0 && counter % 5 === 0) {
//         console.log("FizzBuzz");
//     } else {
//         console.log(counter);
//     }
// }