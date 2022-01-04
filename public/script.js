/*Slider of feedbacks*/

$(".slider-1").on('afterChange', function (event, slick, currentSlide) {
    $(".slide-num-current").text("0" + String(currentSlide + 1));
  });
  $(document).ready(function () {
    $('.slider-1').slick({
      dots: false,
      prevArrow: $('.pr'),
      nextArrow: $('.nx'),
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });