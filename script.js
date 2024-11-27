let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlides() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showSlides, 3000);
