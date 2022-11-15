$(".reduced-price-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    400: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
