$(document).ready(function () {
  console.log("jQuery is ready!");

  let count = 2;

  $("#btnAdd").click(function () {
    count++;
    $("#list").append("<li>Item " + count + "</li>");
  });

  $("#btnAddTop").click(function () {
    count++;
    $("#list").prepend("<li>Item " + count + "</li>");
  });

  $("#btnRemove").click(function () {
    $("#list li:last").remove();
  });

  $("#btnImg").click(function () {
    if ($("#myImg").attr("src") === "images/day.svg") {
      $("#myImg").attr("src", "images/night.svg");
    } else {
      $("#myImg").attr("src", "images/day.svg");
    }
  });

  $("#btnLink").click(function () {
    $("#myLink").attr("href", "https://api.jquery.com");
    $("#linkText").text($("#myLink").attr("href"));
  });

  $("#name").on("input", function () {
    $("#showName").text($(this).val());
  });

  $("#email").on("input", function () {
    $("#showEmail").text($(this).val());
  });
});
