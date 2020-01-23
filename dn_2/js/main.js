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

  $(".product .product_details .details_box .title a").on('click', function (e) {
    $(this).closest(".details_box").find(".content").fadeToggle();
    e.preventDefault();
  });

  if ($(window).width() < 1024) {

    $(document).on("click", function (event) {
      if ($("header nav").is(":visible") && !$(event.target).closest("header nav").length && !$(event.target).closest(".menu").length) {
        $("header nav:visible").toggle();
        button.toggleClass('close');
      }
    });

  }

  //$(".garage_info").hide();

  /*var garage = $('.wrap .garage_info');
  var buttongarage = $('header .garage');

  buttongarage.on('click', function () {
    garage.toggle();
    buttongarage.toggleClass("garage_active");
  });
  
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".wrap .garage_info").length && !$(event.target).closest("header .garage").length) {
      $(".wrap .garage_info:visible").toggle();
      buttongarage.toggleClass("garage_active");
    }
  });*/

  // Select2 initiate
  $(".vehicle_select form select").select2();

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

  $("header .middle .user .garage .expand ul li img").click(function(){
    $(this).closest("li").remove();
  });
  
  $("header .middle .user .garage-button").hover(
    function(){
      $(".expand", this).stop(true).fadeIn(100);
    }, function() {
      $(".expand", this).stop(true).fadeOut(100);
  });

});