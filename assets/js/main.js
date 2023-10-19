const counters = document.querySelectorAll(".purecounter");
counters.forEach((counter) => {
  new PureCounter(counter);
});

$(document).ready(function () {
  $(".courseSlider").owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    margin: 30,
    dots:false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    autoplaySpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('topNav').classList.add('scrolling')
    document.getElementById('topNav').classList.remove('pt-4')
  } else {
    document.getElementById('topNav').classList.add('pt-4')
    document.getElementById('topNav').classList.remove('scrolling')
  }
}