//Get p element for current day
var currentDayEl = $("#currentDay");

var currentDay = moment().format("dddd Do MMMM YYYY");

currentDayEl.text(currentDay);

//While loop that loops to create 9-5 timeblocks
//For each loop, generate or build HTML timeblock row
var startOfBusiness = moment(09, 'HH');
var divEl = $(".container");

//Add/append first row for 9am
divEl.append("<row class=row></row>");
var row = $(".row");

//Add/append hour div within first row
row.append("<div class=hour></div>");
var hour = $(".hour");
hour.text(startOfBusiness.format('HHA'));

//Add/append text area within first row
row.append("<textarea class=text-area></textarea>");
var textArea = $(".text-area");

//Add/append save button within first row
row.append("<button class=saveBtn></button>");


// row.text(startOfBusiness.format('HHA'));

// while (startOfBusiness.hour() < 18) {
//     startOfBusiness.add(1, 'hours'); 
//     divEl.append("<row class=new-row></row>");
//     var newRow = $(".new-row");
//     console.log(startOfBusiness.format('HHA'));
//     newRow.text(startOfBusiness.format('HHA'));
// };