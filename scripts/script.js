//Get p element for current day
var currentDayEl = $("#currentDay");

var currentDay = moment().format("dddd Do MMMM YYYY");

currentDayEl.text(currentDay);
