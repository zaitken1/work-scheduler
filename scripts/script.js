//Get p element for current day
var currentDayEl = $("#currentDay");

//Add current date
var currentDay = moment().format("dddd Do MMMM YYYY");
currentDayEl.text(currentDay);

//Declare variable for starting time
var startOfBusiness = moment(09, 'HH');
var divEl = $(".container");

// While loop that loops to create 9-5 timeblocks
// For each loop, generate or build new HTML timeblock row

while (startOfBusiness.hour() < 18) {
    divEl.append("<row class='new-row'>" + startOfBusiness.format('HHA') + "</row>");
    var newRow = $(".new-row");
    startOfBusiness.add(1, 'hours');
};

//Add/append hour, textarea and button to each new div
newRow.append("<textarea class=text-area></textarea>");
newRow.append("<button class=saveBtn></button>");

//Check if timeblock is past, present or future - unfinished
var newHour = $(".new-hour");

let now = moment();
console.log(now.format());
