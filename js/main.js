
$(document).ready(function () {

  // document.event.preventDefault();
      
var mySwiper = new Swiper('#specialties ',  {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    speed: 700,
    spaceBetween: 0,
    fadeEffect: {
        crossFade: false
      },
});


var mySwiper = new Swiper('#galerie', {
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 5.3,
  spaceBetween: 0,
  loop: false,
  // mousewheel: {
  //   invert: true,
  // },
 
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  speed: 1400

  
});
    
  let tabsItem = $('.menu-navigation-items');
  console.log(tabsItem)
  tabsItem.on('click', function(event) {
      console.log($(this).attr('href'))
      event.preventDefault();
      let activeContent = $(this).attr('href');
      console.log(activeContent)
      $('.visible').toggleClass('visible');
      $(activeContent).toggleClass('visible');          
  });
  
  
});