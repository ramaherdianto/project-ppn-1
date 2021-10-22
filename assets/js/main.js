// =========== Preloader
(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });
})(jQuery);

    new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      breakpoints: {
        429: {
          perPage: 2,
          fixedHeight: '30vw',
        },
      },
      width: '80%',
      gap: '2vw',
      pagination: false,
      autoplay: true,
      interval: 3000
    }).mount();