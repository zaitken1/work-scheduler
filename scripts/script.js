//Get p element for current day
var currentDayEl = $("#currentDay");

//Add current date
var currentDay = moment().format("dddd Do MMMM YYYY");
currentDayEl.text(currentDay);

//Declare variable for starting time
var startOfBusiness = moment(09, 'h');
var divEl = $(".container");

// While loop that loops to create 9-5 timeblocks
// For each loop, generate or build new HTML timeblock row


while (startOfBusiness.hour() < 18) {
    //Variable to create ID value
    var id = timeBlock;
    console.log(id);

    //Add/append hour, textarea and button to each row
    divEl.append("<row class=hour>" + startOfBusiness.format('ha') + "</row>");
    divEl.append("<textarea class=text-area></textarea>");
    divEl.append("<button class=saveBtn></button>");

    '<li id="' + id + '">'

    //Fetch newly created HTML elements using class
    var hour = $(".hour");
    var textArea = $(".text-area");
    var saveBtn = $(".saveBtn");

    //Declare variable for checking time blocks against current time
    var timeBlock = startOfBusiness.format('H');
    var currentTime = moment().hours();
    // console.log(timeBlock, currentTime);

    



    // if (timeBlock == currentTime) {
    //     console.log("This is the current time");
    // } else if (timeBlock < currentTime) {
    //     console.log("This time has passed");
    // } else if (timeBlock > currentTime) {
    //     console.log("This time is in the future");
    // }

    //Add one hour to startOfBusiness on each loop
    startOfBusiness.add(1, 'hours');
};

// if (checktimeOne === checktimeTwo) {
//         cont[i].className += 'abc'
//     } else if (checktimeOne > checktimeTwo) {
//         cont[i].className += 'def'
//     } else {
//         cont[i].className += 'ghi'
//     }





//Check if timeblock is past, present or future - not working
var now = moment().format('h');
// console.log(now);

function calTime(){
    if (startOfBusiness.isBefore(now)){
        textArea.css('bacground-color', 'grey');
    }
}






    