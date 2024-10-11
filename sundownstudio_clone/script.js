const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

//function page4Animation() {
var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function() {
    fixed.style.display = "block"
})

elemC.addEventListener("mouseleave", function() {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem");
elems.forEach(function(e) {
    e.addEventListener("mouseenter", function() {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

/*function swiperAnimation() {
    var swiper = new swiper(".mySwiper", {
        cssMode: true,
        mousewheel: true,
        keyboard: true,
    });
}*/

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,

    });
    swiper.on('slideChange', function() {
        // Enable mouse events when swiper container is active
        swiper.mousewheel.enable();
    });

    swiper.on('touchStart', function() {
        // Disable mouse events when touch events are active
        swiper.mousewheel.disable();
    });








}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function() {
        loader.style.top = "-100%"
    }, 4200)
}
swiperAnimation();
loaderAnimation()