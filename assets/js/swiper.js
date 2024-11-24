document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'swiper'
    const swiperElements = document.querySelectorAll('.swiper');

    // Loop through each '.swiper' element and initialize Swiper
    swiperElements.forEach(swiperElement => {
        const swiper = new Swiper(swiperElement, {
            lazy: true,
            speed: 300,

            pagination: {
                el: swiperElement.querySelector(".swiper-pagination"),
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: swiperElement.querySelector(".swiper-button-next"),
                prevEl: swiperElement.querySelector(".swiper-button-prev"),
            },
        });
    });
});