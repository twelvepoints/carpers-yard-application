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
            slidesPerView: 3,
            pagination: false,
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
            slidesPerView: 5,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
            clickable: true
        }
    }
});



window.addEventListener("load", function() {
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});
