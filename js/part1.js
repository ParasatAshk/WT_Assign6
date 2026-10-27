$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#btnText").click(function () {
    $("#title").text("New title");
    $(".info").text("New paragraph text");
  });

  $("#btnHtml").click(function () {
    $("span").html("<b>This span is bold now</b>");
  });

  $("#btnCss").click(function () {
    $("#title").css("color", "green");
    $(".info").css({ "background-color": "yellow", "font-size": "18px" });
    $("span").css("border", "1px solid red");
  });
});
