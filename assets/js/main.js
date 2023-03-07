$(document).ready(function () {
    // Assign some jquery elements we'll need
    var $swiper = $(".swiper-container");
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    var $bottomSlideContent = null; // Slide content that gets passed between the
    // panning slide stack and the position 'behind'
    // the stack, needed for correct animation style

    var mySwiper = new Swiper(".about__swiper-container", {
        spaceBetween: 1,
        slidesPerView: 1,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        speed:1200,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev"
        },
        breakpoints: {

            640: {
                slidesPerView: 2,
                spaceBetween: 2,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 3,
            }
           
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });
});

const testimonial_div = document.querySelector(".testimonial-Swiper")
if (
    testimonial_div
) {
    var swiper = new Swiper(".testimonial-Swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        center: true,
        centeredSlides: true,
        breakpoints: {

            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            990: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loop: true,
    });

}
////////////////////////

$('input').focus(function () {
    $(this).parent().addClass('active');
    $('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    })
});

///////////////////////////////////////
// Navbar scroll

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }

});
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#land-nav').addClass('sticky')
    } else {
        $('#land-nav').removeClass('sticky')

    }

});








/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector("#hamburger-1")
const closeBtn = document.querySelector("#hamburger-2")
const nav_list = document.querySelector(".land-nav")
const navContact = document.querySelector(".nav-contact")

function mobileMenu() {
    openBtn.classList.toggle("active");
    closeBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
}
function mobileMenuClose() {
    openBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
    closeBtn.classList.toggle("active");

}


openBtn.addEventListener("click", mobileMenu)
closeBtn.addEventListener("click", mobileMenuClose)



/////////////////////////////////////////////////////
// scroll

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});




$('.projects__btn').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
})

