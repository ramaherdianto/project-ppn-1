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

// ========= Slider
new Glide(".glide", {
  type: "carousel",
  autoplay: 2000,
  hoverpause: true,
  animationDuration: 1000,
  animationTimingFunc: "ease-in-out",
  perView: 2,
}).mount();
