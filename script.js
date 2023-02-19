$(document).ready(function () {

  console.log("ready to code")
})

//------------------------------------------------------------------------

// display the time at top

var today = document.querySelector("#currentDay");

// set interval so that the seconds refresh at 1000
setInterval(function () {
  today.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000)

console.log(today)

//------------------------------------------------------------------------

//create a function to tell the past present or future times on the calendar

// function currentTime() {
var currentHour = moment().format("HH");
console.log(currentHour)


$(".time-block").each(function () {
  var calendarHour = $(this).attr("id").split("-")[1];
  console.log(calendarHour)
  // console.log(calendarHour)
  //create and if and else for the past present and future time blocks
  if (currentHour == calendarHour) {
    $(this).addClass("present");
    $(this).children(".description").addClass("present");

  } else if (currentHour < calendarHour) {
    $(this).removeClass("present");
    $(this).addClass("future");

  } else if (currentHour > calendarHour) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

//------------------------------------------------------------------------


// save the data to the local storage and event listener

$(".saveBtn").click(function () {

  var localTime = $(this).siblings(".hour").text();
  var localPlan = $(this).siblings(".description").val();

  localStorage.setItem(localTime, localPlan);
});

//------------------------------------------------------------------------




























