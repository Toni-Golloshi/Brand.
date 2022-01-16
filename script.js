var web = document.querySelector('.header-hitbox');
// var nav = document.getElementsByClassName('nav-activate');
var navList = document.getElementsByClassName('navlist__el-a');
gsap.set('.slice', { autoAlpha: 0 });

var carouselImages = [
    {
        id: 1,
        title: 'Title 1',
        description: 'Decription 1',
        imgPath: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80'
    }, {
        id: 2,
        title: 'Title 2',
        description: 'Decription 2',
        imgPath: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80'
    }, {
        id: 3,
        title: 'Title 3',
        description: 'Decription 3',
        imgPath: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80'
    }, {
        id: 4,
        title: 'Title 4',
        description: 'Decription 4',
        imgPath: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80'
    }
];

/** Event Listeners */
function addEventListeners() {
    web.addEventListener('mouseover', mouseOver);
    web.addEventListener('mouseout', mouseOut);
}

function mouseOver(e) {
    gsap.set('.slice', { autoAlpha: 1 });
    gsap.to('.slice', { duration: 0.2, stagger: 0.05, x: 'random(-50, 20)', repeat: 15, yoyo: true, ease: 'elastic.out(2, 0.3)' });
}

function mouseOut(e) {
    gsap.to('.slice', { duration: 0.4, x: 0, scale: 1, y: 0 });
    gsap.set('.slice', { autoAlpha: 0 });
}

addEventListeners();


for (var i = 0; i < navList.length; i++) {
    // eslint-disable-next-line func-names
    navList[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('nav-active');
        current[0].className = current[0].className.replace(' nav-active', '');
        this.className += ' nav-active';
    });
}


// eslint-disable-next-line func-names
$(document).ready(function () {
    // eslint-disable-next-line func-names
    carouselImages.forEach(function ({ title, imgPath }) {
        $('.carousel').append(`<div class="sizephoto-carousel">
        <img src="${imgPath}"
            alt="${title}" class="sizephoto sizephoto__car">
    </div>`);
    });
    $('.carousel').slick({
        centerMode: true,
        dots: true,
        /* Just changed this to get the bottom dots navigation */
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    });
});
