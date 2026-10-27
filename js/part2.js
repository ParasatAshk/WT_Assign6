$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#btnHide").click(function () {
    $("#text").hide();
  });
  $("#btnShow").click(function () {
    $("#text").show();
  });
  $("#btnToggle").click(function () {
    $("#text").toggle();
  });

  $("#btnFadeIn").click(function () {
    $("#fadeImg").fadeIn();
  });
  $("#btnFadeOut").click(function () {
    $("#fadeImg").fadeOut();
  });
  $("#btnFadeToggle").click(function () {
    $("#fadeImg").fadeToggle();
  });

  $("#btnSlideUp").click(function () {
    $("#panel").slideUp();
  });
  $("#btnSlideDown").click(function () {
    $("#panel").slideDown();
  });
  $("#btnSlideToggle").click(function () {
    $("#panel").slideToggle();
  });
});
