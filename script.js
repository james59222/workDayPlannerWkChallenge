

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



var today = dayjs();
var currentHour = today.hour();
$('#currentDay').text(today.format('MMM D, YYYY HH:ss'));
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in
    var timeDataEl = document.querySelector('.container');
      $('.saveBtn').on('click', function () {
      var idVal = $(this).siblings('.description').val();
      var timeVal = $(this).parent().attr('id');
  // local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the
      localStorage.setItem(timeVal, idVal);
    });
  // 
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
    
  //
  // TODO: Add code to apply the past, present, or future class to each time
 
    
  //grabs hour from each time slot and compares it to actual time
  //grabs values from time and value divs and saves them to local storage
    $('#hour08 .description').val(localStorage.getItem('hour08'));
    $('#hour09 .description').val(localStorage.getItem('hour09'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));
  
    function checkHour() {
    // get current number of hours
    //retrieves items from local storage and sets them in proper places
    // block by comparing the id to the current hour.
    $('.time-block').each(function () {
      var timeVal = parseInt($(this).attr('id').split("hour")[1]);

    // if the time Id attribute is before the current hour, add the past class
    if (timeVal < currentHour) {
      $(this).addClass('past');
    } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
    else if (timeVal === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}
  checkHour();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
 