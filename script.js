// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$ (function () {
  var currentHour = dayjs().format("hh");

  window.onload = displayClock();


// function for displaying clock and updating it every second
function displayClock() {
  var currentDay = dayjs().format('MMM DD, YYYY, hh:mm:ss a');
  $('#dayTime').text(currentDay);
  setTimeout(displayClock, 1000);
};


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $("button").on("click", function(event){
    var taskInput = $(this).siblings("textarea").val();
    var taskId = $(this).parent().attr("id");
    localStorage.setItem(taskInput, taskId);

  });

  $("#9AM").val(localStorage.getItem("hour-9"));
  $("#10AM").val(localStorage.getItem("hour-10"));
  $("#11AM").val(localStorage.getItem("hour-11"));
  $("#12PM").val(localStorage.getItem("hour-12"));
  $("#1PM").val(localStorage.getItem("hour-13"));
  $("#2PM").val(localStorage.getItem("hour-14"));
  $("#3PM").val(localStorage.getItem("hour-15"));
  $("#4PM").val(localStorage.getItem("hour-16"));
  $("#5PM").val(localStorage.getItem("hour-17"));

  var currentHour = Number.parseInt(currentHour)
  
  var idArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  for (let i = 0; i < idArray.length; i++) {
    var timeDiv = $("#" + idArray[i]).attr("id");
    var parseTimeDiv = Number.parseInt(timeDiv);

      if (parseTimeDiv < currentHour) {

        $("#" + idArray[i]).children('textarea').addClass('past');

      } else if ( parseTimeDiv === currentHour ) {
	        
        $('#'+idArray[i]).children('textarea').addClass('present');

      } else {
	        
        $('#'+idArray[i]).children('textarea').addClass('future');
      };
  };
});
