const swiperFeatured = new Swiper('.featured-carousel .swiper-container', {
    roundLengths: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    spaceBetween: 8,
    slidesPerView: 1.15,
    breakpoints: {
        1024: {
            slidesPerView: 2.5,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
            clickable: true
        }
    }
});

const swiperCard = new Swiper('.card-carousel .swiper-container', {
    roundLengths: true,
    grabCursor: true,
    freeModeMomentum: true,
    spaceBetween: 8,
    slidesPerView: 2.5,
    breakpoints: {
        1024: {
            slidesPerView: 5.5,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
            clickable: true
        }
    }
});
