$(document).ready((function(){$(".swiper-container"),new Swiper(".swiper-container",{spaceBetween:1,slidesPerView:3,centeredSlides:!0,roundLengths:!0,loop:!0,loopAdditionalSlides:30,navigation:{nextEl:".next",prevEl:".prev"}})}));const testimonial_div=document.querySelector(".testimonial-Swiper");if(testimonial_div)var swiper=new Swiper(".testimonial-Swiper",{slidesPerView:1,spaceBetween:30,center:!0,centeredSlides:!0,breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40},990:{slidesPerView:4,spaceBetween:30}},autoplay:{delay:1500,disableOnInteraction:!1},loop:!0});$("input").focus((function(){$(this).parent().addClass("active"),$("input").focusout((function(){""==$(this).val()?$(this).parent().removeClass("active"):$(this).parent().addClass("active")}))})),$(window).on("scroll",(function(){$(window).scrollTop()>200?$("#navbar").addClass("sticky"):$("#navbar").removeClass("sticky")})),$(window).on("scroll",(function(){$(window).scrollTop()>200?$("#land-nav").addClass("sticky"):$("#land-nav").removeClass("sticky")}));const openBtn=document.querySelector("#hamburger-1"),closeBtn=document.querySelector("#hamburger-2"),nav_list=document.querySelector(".land-nav"),navContact=document.querySelector(".nav-contact");function mobileMenu(){openBtn.classList.toggle("active"),closeBtn.classList.toggle("active"),nav_list.classList.toggle("active")}function mobileMenuClose(){openBtn.classList.toggle("active"),nav_list.classList.toggle("active"),closeBtn.classList.toggle("active")}openBtn.addEventListener("click",mobileMenu),closeBtn.addEventListener("click",mobileMenuClose),$(document).ready((function(){$(window).scroll((function(){$(this).scrollTop()>100?$("#scroll").fadeIn():$("#scroll").fadeOut()})),$("#scroll").click((function(){return $("html, body").animate({scrollTop:0},600),!1}))}));