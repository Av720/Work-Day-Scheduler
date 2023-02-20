$(document).ready(function () {

  // console.log("ready to code")

  // this will run the function (saveOnRefresh)
  saveOnRefresh()
  // console.log(localStorage)
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

// this function will tell the current time using momemt
var currentHour = moment().hour();
console.log(currentHour)

// traverse the DOM
$(".time-block").each(function () {
  var calendarHour = parseInt($(this).attr("id").split("hour")[1]);

  console.log(calendarHour)

  //create and if and else for the past present and future time blocks, this will change the colors according to the current hour present 
  if (calendarHour < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
  }
  else if (calendarHour === currentHour) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  }
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
});

//------------------------------------------------------------------------


// save the data to the local storage and event listener

//create the functions using the saveBtn class and add click event listener
$(".saveBtn").click(function () {

  //create 2 variables , 1 for the time and the other for the value > then tie them to the ID/class
  var localTime = $(this).siblings(".hour").text();
  var localPlan = $(this).siblings(".description").val();


  //create the local storage and use setItem 
  localStorage.setItem(localTime, localPlan);
});

//-----------------------------------------------------------------------


// //   //create a function so that when the page refreshes , the data will save 

function saveOnRefresh() {

  //create the function using the class .hour 
  $(".hour").each(function () {


    //create 2 vars for each value 
    var currentHour = $(this).text();
    var currentMeeting = localStorage.getItem(currentHour);

    // console.log(this); = works
    // console.log(currentHour); = works

    if (currentMeeting !== null) {
      $(this).siblings(".description").val(currentMeeting);
    }

  });
}


//-----------------------------------------------------------------------


























