
// display the time at top

var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY h:mm A"));

//------------------------------------------------------------------------
// create a global variable and define it

var saveBtn = $(".saveBtn");

//------------------------------------------------------------------------

//create a function to tell the past present or future times on the calendar

function currentTime() {
  var currentTime = moment().hours();

  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"));

    console.log(this);

    //create and if and else for the past present and future time blocks

    if (currentTime > currentHour) {
      $(this).addclass("future");
    } else if (currentHour === currentTime) {
      $(this).addclass("present");
    } else {
      (this).addclass("past")
    }

  })
};

//------------------------------------------------------------------------
