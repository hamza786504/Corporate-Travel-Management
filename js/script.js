$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    navigation: true,
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });

  $("#owl-image").owlCarousel({
    navigation: true,
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });
});
