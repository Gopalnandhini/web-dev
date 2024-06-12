function bigImg(x) {
    x.style.height = "570px";
    x.style.width = "500px";
  }
  
  function normalImg(x) {
    x.style.height = "540px";
    x.style.width = "470px";
  }
  $(document).ready(function(){
    $('.carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false,
      dots: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  function nextSlide() {
    $('.carousel').slick('slickNext');
  }
  function prevSlide() {
    $('.carousel').slick('slickPrev');
  }