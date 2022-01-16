var web = document.querySelector('.header-hitbox');
// var nav = document.getElementsByClassName('nav-activate');
var navList = document.getElementsByClassName('navlist__el-a');
gsap.set('.slice', { autoAlpha: 0 });

var carouselImages = [
    {
        id: 1,
        title: 'Title 1',
        description: 'Decription 1',
        imgPath: 'img/carousel01_1.jpg'
    }, {
        id: 2,
        title: 'Title 2',
        description: 'Decription 2',
        imgPath: 'img/carousel01_2.jpg'
    }, {
        id: 3,
        title: 'Title 3',
        description: 'Decription 3',
        imgPath: 'img/carousel01_3.jpg'
    }, {
        id: 4,
        title: 'Title 4',
        description: 'Decription 4',
        imgPath: 'img/carousel01_4.jpg'
    }, {
        id: 5,
        title: 'Title 5',
        description: 'Decription 4',
        imgPath: 'img/carousel01_5.jpg'
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


/** Nav list. Make list elements active by adding/removing a class */

for (var i = 0; i < navList.length; i++) {
    // eslint-disable-next-line func-names
    navList[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('nav-active');
        current[0].className = current[0].className.replace(' nav-active', '');
        this.className += ' nav-active';
    });
}

/** jQuery used to get elements from the array and adding them to css as divs.
 * Second part of it is to make the carousel library work. */

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
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    });
});
