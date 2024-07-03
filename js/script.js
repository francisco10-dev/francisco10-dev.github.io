document.addEventListener('DOMContentLoaded', function() {
    function initSwiper() {
        const isMobile = window.innerWidth <= 768;

        new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            effect: 'slide',
            pagination: {
                el: '.swiper-pagination',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    ScrollReveal().reveal('.animated-item', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 300,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
    
    ScrollReveal().reveal('.revel-left', {
        origin: 'left',
        distance: '1250px',
        duration: 1000,
        delay: 300,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        once: true
    });
    
    ScrollReveal().reveal('.reveal', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 300,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
    
    ScrollReveal().reveal('.revel-b', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 300,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    ScrollReveal().reveal('.reveal-buttoms', {
        origin: 'bottom',
        distance: '100px',
        duration: 1000,
        delay: 300,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    initSwiper();

});