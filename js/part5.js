$(document).ready(function () {
  console.log("jQuery is ready!");

  $(".acc-header").click(function () {
    $(".acc-body").not($(this).next()).slideUp();
    $(".acc-header").not(this).removeClass("open");
    $(this).next().slideToggle();
    $(this).toggleClass("open");
  });
});
