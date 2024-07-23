document.addEventListener("DOMContentLoaded", function () {
    const images = [
        'images/slideshow/1.jpeg',
        'images/slideshow/2.jpeg',
        'images/slideshow/3.jpeg',
        'images/slideshow/8.jpeg',
        'images/slideshow/5.jpg',  // Ensure this image path is correct and accessible
        // Add more image paths here
    ];

    const sliderHolder = document.getElementById('slider');

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('slider-image');
        if (index === 0) img.classList.add('active');
        sliderHolder.appendChild(img);
    });

    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slider-image');
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    document.getElementById('nextButton').addEventListener('click', nextSlide);
    document.getElementById('prevButton').addEventListener('click', prevSlide);
});
