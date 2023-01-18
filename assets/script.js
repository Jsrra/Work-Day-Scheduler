$(function () {

  // Alert func 
  $(".saveBtn").on("click", function () {
    $("#notify").removeClass("hide");

    setTimeout(function () {
      $("#notify").addClass("hide");
    }, 5000);

  });

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val().trim();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, text);
  })

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  function colorChange() {
    var currentTime = dayjs().hour();

    console.log(currentTime);

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id"));

      if (blockTime < currentTime) {
        $(this).addClass("past")
      } else if (blockTime === currentTime) {
        $(this).removeClass("past")
        $(this).addClass("present")
      } else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }
    })
  }
  colorChange();
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
});



