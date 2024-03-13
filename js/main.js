$(document).ready(function () {
  console.log("document geladen");

  // Sectie 1 lezen-content
  $("#lezen-content").on("mouseover", function () {
    $(this).css({
      'background-color': 'orange',
      'color': 'navy'
    });
  });

  $("#lezen-content").on("mouseleave", function () {
    $(this).css({
      'background-color': '#FFF',
      'color': '#000000'
    });
  });

  // Sectie 2 algemeen-content
  $("#algemeen-content").on("mouseenter", function () {
    $(this).css({
      'background-color': 'pink',
      'color': 'darkgreen'
    });
  }).on("mouseleave", function () {
    $(this).css({
      'background-color': '#FFF',
      'color': '#000000'
    });
  });

  // Button click verberg/toon
  $("#verberg-btn").click(function () {
    $("#algemeen").slideUp();
  });

  $("#toon-btn").click(function () {
    $("#algemeen").slideDown();
  });

  // Sectie 3
  //Fade In/Uit
  $("#voordelen-van-lezen").on("mouseenter", function () {
    $('#voordelen-van-lezen').fadeOut(3000);
  });

  $("#voordelen-van-lezen").on("mouseleave", function () {
    $('#voordelen-van-lezen').fadeIn();
  });
  // foto alert
  $("#lezen").on("mouseenter", function () {
    alert("Dit is een foto.");
  });

});