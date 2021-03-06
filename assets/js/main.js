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

// ============ Splide service
new Splide(".splide", {
  type: "loop",
  perPage: 3,
  breakpoints: {
    429: {
      perPage: 2,
      fixedHeight: "40vw",
    },
  },
  fixedHeight: "28vw",
  width: "80%",
  gap: "2vw",
  pagination: false,
  autoplay: true,
  interval: 3000,
}).mount();

// ==========Splide-client

new Splide(".splide-client", {
  type: "loop",
  perPage: 3,
  breakpoints: {
    429: {
      perPage: 2,
      fixedHeight: "40vw",
    },
  },
  fixedHeight: "28vw",
  width: "80%",
  gap: "2vw",
  pagination: false,
  autoplay: true,
  interval: 3000,
}).mount();

// ======== AOS js()
AOS.init({
  once: true,
});

// ======== Pengambilan Date()
const year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();
