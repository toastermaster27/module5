
const date = dayjs(); // creates a new instance with the current date and time
const weekday = date.format('dddd'); // returns the weekday name (e.g. "Monday")
const month = date.format('MMMM'); // returns the month name (e.g. "January")
const dayOfMonth = date.format('D'); // returns the day of the month as a number (e.g. 1)
const fullDateTime = date.format('dddd, MMMM D YYYY, h:mm A'); // returns full date including current minute
const fullDate = (`${weekday}, ${month} ${dayOfMonth}`); // Retuns date in Weekday, Month, and Day format


document.getElementById('currentDay').innerHTML = fullDate;

const saveBtn = document.getElementById('saveBtn');

let currentHour = date.format("HH");
console.log(currentHour);


$(".time-div").each(function () {
  const timeDiv = $(this).attr("id").split("-")[1];
  
  if (currentHour < timeDiv) {
    $(this).addClass("future");
  } else if (currentHour > timeDiv) {
    $(this).addClass("past");
  } else $(this).addClass("present");

  if (currentHour === timeDiv) {
    $(this).addClass("present");
  }
});

$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-div").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
});

//retrieves items from local storage and sets them in proper places
$("#hour-09 .time-div").val(localStorage.getItem("09"));
$("#hour-10 .time-div").val(localStorage.getItem("10"));
$("#hour-11 .time-div").val(localStorage.getItem("11"));
$("#hour-12 .time-div").val(localStorage.getItem("12"));
$("#hour-13 .time-div").val(localStorage.getItem("13"));
$("#hour-14 .time-div").val(localStorage.getItem("14"));
$("#hour-15 .time-div").val(localStorage.getItem("15"));
$("#hour-16 .time-div").val(localStorage.getItem("16"));
$("#hour-17 .time-div").val(localStorage.getItem("17"));




