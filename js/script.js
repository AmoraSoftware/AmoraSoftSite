/* Открытие меню */

var main = function() { //главная функция

    $('.header-icon-menu').click(function() { /* выбираем класс icon-menu и
     добавляем метод click с функцией, вызываемой при клике */

        $('.nav').animate({ //выбираем класс menu и метод animate

            right: '0px' /* теперь при клике по иконке, меню, скрытое за
            левой границей на 285px, изменит свое положение на 0px и станет видимым */

        }, 200); //скорость движения меню в мс

        $('body').animate({ //выбираем тег body и метод animate

            right: '390px' /* чтобы всё содержимое также сдвигалось вправо
            при открытии меню, установим ему положение 285px */

        }, 200); //скорость движения меню в мс

        // $('.header-icon-menu').addClass('open');
      });


    /* Закрытие меню */

    $('.nav-icon-close').click(function() { //выбираем класс icon-close и метод click

        $('.nav').animate({ //выбираем класс menu и метод animate

            right: '-390px' /* при клике на крестик меню вернется назад в свое
            положение и скроется */

        }, 200); //скорость движения меню в мс

    $('body').animate({ //выбираем тег body и метод animate

            right: '0px' //а содержимое страницы снова вернется в положение 0px

        }, 200); //скорость движения меню в мс

    // $('.header-icon-menu').removeClass('open');

  });
  };

$(document).ready(main); /* как только страница полностью загрузится, будет
вызвана функция main, отвечающая за работу меню */



$(function() {
  // прокрутка к якорю
  $("a[href*=#]").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });

  // слайдер карусель
  $('.portfolio-slider .owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout:3000,
    margin:20,
    responsiveClass:true,
  })

  // слайдер отзывов
  var owl = $('.testimonials .owl-carousel').owlCarousel({
    items: 1,
    loop:true,
    autoplay: true,
    autoplayTimeout:6000,
    margin:0,
    responsiveClass:true,
  })
  // Go to the next item
  $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBtn').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  })

});