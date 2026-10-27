$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#btnBasic").click(function () {
    $("#box1").animate({ width: "130px", height: "130px", left: "150px", top: "40px" }, 1000);
  });

  $("#btnBasicReset").click(function () {
    $("#box1").animate({ width: "80px", height: "80px", left: "0px", top: "0px" }, 500);
  });

  $("#btnSteps").click(function () {
    $("#box2")
      .animate({ left: "200px" }, 800)
      .animate({ top: "100px" }, 800)
      .animate({ width: "40px", height: "40px" }, 800)
      .animate({ left: "0px", top: "0px", width: "80px", height: "80px" }, 800);
  });
});
