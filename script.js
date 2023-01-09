// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
window.onload = displayClock();


// function for displaying clock and updating it every second
function displayClock() {
  var currentDay = dayjs().format('MMM DD, YYYY, hh:mm:ss a');
  var display = new Date().toLocaleTimeString();
  $('#dayTime').text(currentDay);
  setTimeout(displayClock, 1000);
};


$(function  () {
  var container = $('#block-div');
  let currentHour = dayjs().format('hh');
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  
  
      $('.saveBtn').on('click', function() {
        event.preventDefault();
        let storeTask = JSON.parse(localStorage.getItem("savedTasks"));
        let saveArray = [];
  
        for (let i = 0; i < 9; i++) {
          let textInput = container
            .children().eq(i).children().eq(1).val()
          saveArray.push(textInput);
        };
  
      localStorage.setItem("savedTasks", JSON.stringify(saveArray));
  
        logInput();
      });
  

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

      function updateTime() {
        for (i = 0; i < 9; i++) {
          let blocks = container.children().eq(i);
          blocks.removeClass("past present future");
      
          if (currentHour == blocks.attr("id")) {
            blocks.addClass("present");
          } else if (currentHour > blocks.attr("id")) {
            blocks.addClass("past");
          } else if (currentHour < blocks.attr("id")) {
            blocks.addClass("future");
      
        }
      }
    }


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

        function logInput() {
          let savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
          updateTime();
          for (let i = 0; i < 9; i++) {
            let inputFromStorage = container
            .children().eq(i).children().eq(1);
            inputFromStorage.text(savedTasks[i]);
          }
        }
  // TODO: Add code to display the current date in the header of the page.
});

