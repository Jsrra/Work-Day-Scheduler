// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html


$(function () {
  $(".saveBtn").on("click", function () {
    $("#notify").addClass("show");

    setTimeout(function () {
      $("#notify").removeClass("show");
    }, 5000);

  });



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var hour = dayjs()

  if (hour === 9) {
    var div9 = document.querySelector("hour-9")
    div9.classList.add("present")
    div9.classList.remove("past")
    div9.classList.remove("future")
  } else {
    if (hour === 10)
      var div10 = document.querySelector("hour-10")
    div10.classList.add("present")
    div10.classList.remove("past")
    div10.classList.remove("future")
    div9.classList.add("past")
    div9.classList.remove("present")
  }
  // }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?'

  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D"));
});

// var nineAM = localStorage.getItem("9am")
// var nineAM = document.querySelector("#9am").value
// localStorage.setItem("hour-9", nineAM)
var userInput = document.getElementById("nineText");
var inputVal = userInput.value;

$("#nineBtn").on("click", function () {
  localStorage.setItem("hour-9", "inputVal");
})