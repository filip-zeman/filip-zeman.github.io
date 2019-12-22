$(function () {

  var nav = $('header nav');
  var button = $('.menu');

  function navToggle() {
    nav.toggle();
    button.toggleClass('close');
  };

  button.on('click', function () {
    navToggle();
  });

  if ($(window).width() < 768) {

    $(document).on("click", function (event) {
      if ($("header nav").is(":visible") && !$(event.target).closest("header nav").length && !$(event.target).closest(".menu").length) {
        $("header nav:visible").toggle();
        button.toggleClass('close');
      }
    });

  }

  var garage = $('.wrap .garage_info');
  var buttongarage = $('header .garage');

  buttongarage.on('click', function () {
    garage.toggle();
    buttongarage.toggleClass("garage_active");
  });

  $(".garage_info").hide();
  
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".wrap .garage_info").length && !$(event.target).closest("header .garage").length) {
      $(".wrap .garage_info:visible").toggle();
    }
  });

  $('.banner').flickity({
    // options
    cellAlign: "left",
    autoPlay: 3000,
    prevNextButtons: false,
    wrapAround: true,
    contain: true,
    pageDots: false
  });

  setInterval(function () { 
  
    if ($(window).width() < 1280) {

    //  $(".banner .bnr a").css("width", $(window).width());

    }
  
  }, 3000);

});