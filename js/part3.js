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
});
