$(function () {
  var nav = $('header nav');
  var button = $('.menu');
  button.on('click', function () {
    nav.toggleClass('hidden');
    button.toggleClass('close');
  });
});