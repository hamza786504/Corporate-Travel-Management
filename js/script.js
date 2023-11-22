$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    navigation: true,
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay:true,
    autoplayTimeout:1000
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




    // JavaScript for toggling sidebar
    const toggleBtn = document.getElementById('toggleBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
  
    toggleBtn.addEventListener('click', () => {
      sidebar.style.width = '250px';
    });
  
    closeBtn.addEventListener('click', () => {
      sidebar.style.width = '0';
    });
});
