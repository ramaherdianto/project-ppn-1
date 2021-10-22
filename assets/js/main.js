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
      // width: '80%',
      // fixedHeight: '20vw',
      gap: '1rem',
      pagination: true,
      autoplay: true,
      interval: 3000
    }).mount();