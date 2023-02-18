
// display the time at top

var today = document.querySelector("#currentDay");

// set interval so that the seconds refresh at 1000
setInterval(function () {
  today.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000)

console.log(today)
//------------------------------------------------------------------------
// create a global variable and define it

var saveBtn = $(".saveBtn");

//------------------------------------------------------------------------

//create a function to tell the past present or future times on the calendar

function currentTime() {
  var currentHour = moment().hour();



  $(".time-block").each(function () {
    var calendarHour = parseInt($(this).attr("id"));

    //create and if and else for the past present and future time blocks

    if (currentHour < calendarHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }

  })
  return (currentTime)
};
console.log(currentHour)


//------------------------------------------------------------------------

//create a function so that when the page refreshes , the data will save 

function saveOnRefresh() {

  $(".hour").each(function () {

    var currentHour = $(this).text();
    var currentMeeting = localStorage.getItem(currentHour);

    console.log(this);
    console.log(currentHour);

    if (currentMeeting !== null) {
      $(this).siblings(".description").val(currentMeeting);
    }

  });
}


//------------------------------------------------------------------------

// create a function for the evenlistener and localstorage

$(document).ready(function () {

  // create an eventlistener for the save button
  $(".saveBtn").on("click", function () {

    //create local variables for the local storage
    var localStoragetTime = $(this).parent().attr("id");
    var localStorageMeeting = $(this).siblings(".description").val();

    // saving the text and time in the local storage by using setItem
    localStorage.setItem(localStoragetTime, localStorageMeeting);

    //console log both vars to make sure they are working 
    console.log(localStorageMeeting, localStoragetTime)
  }) // end of function

  //------------------------------------------------------------------------

});



