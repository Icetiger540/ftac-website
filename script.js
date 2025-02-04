document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let index = 0;
    const totalSlides = document.querySelectorAll(".carousel img").length;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    setInterval(nextSlide, 4000); // Auto-scroll every 4 seconds
});
