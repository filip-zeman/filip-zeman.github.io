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

  $(document).on("click", function (event) {
    if ($("header nav").is(":visible") && !$(event.target).closest("header nav").length && !$(event.target).closest(".menu").length) {
      $("header nav:visible").toggle();
      button.toggleClass('close');
    }
  });

  var garage = $('header .garage_info');
  var buttongarage = $('header .garage');

  buttongarage.on('click', function () {
    garage.toggle();
  });

  $(".garage_info").hide();

  $(document).on("click", function (event) {
    if (!$(event.target).closest("header .garage_info").length && !$(event.target).closest("header .garage").length) {
      $("header .garage_info:visible").toggle();
    }
  });

});