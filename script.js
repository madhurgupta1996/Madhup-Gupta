let slideIndex = 0;
let slideInterval = setInterval(autoSlide, 5000);

function showSlides(index) {
    let slides = document.getElementsByClassName("slides");

    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    clearInterval(slideInterval);
    slideIndex += n;
    showSlides(slideIndex);
    slideInterval = setInterval(autoSlide, 5000);
}

function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

showSlides(slideIndex);