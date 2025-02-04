document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener("click", function() {
        index = (index + 1) % 4;
        updateCarousel();
    });

    prevButton.addEventListener("click", function() {
        index = (index - 1 + 4) % 4;
        updateCarousel();
    });
});
