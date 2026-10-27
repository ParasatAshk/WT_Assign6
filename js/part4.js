$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#btnBasic").click(function () {
    $("#box1").animate({ width: "130px", height: "130px", left: "150px", top: "40px" }, 1000);
  });

  $("#btnBasicReset").click(function () {
    $("#box1").animate({ width: "80px", height: "80px", left: "0px", top: "0px" }, 500);
  });
});
