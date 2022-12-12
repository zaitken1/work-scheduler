//Get p element for current day
var currentDayEl = $('#currentDay');

//Add current date
var currentDay = moment().format('dddd Do MMMM YYYY');
currentDayEl.text(currentDay);

//Declare variable for starting time
var startOfBusiness = moment(09, 'h');
var divEl = $('.container');

//Declare variable for checking current time
var currentTime = moment().hours();
console.log(currentTime);

// While loop that loops to create 9-5 timeblocks
// For each loop, generate or build new HTML timeblock row
while (startOfBusiness.hour() < 18) {

    //Declare variable for checking time blocks against current time
    var timeBlock = startOfBusiness.format('H');

    //Variable to create ID value
    var id = timeBlock;

    //Add/append hour, textarea and button to each row
    divEl.append('<row class=hour>' + startOfBusiness.format('ha') + '</row>');
    divEl.append('<textarea class=text-area id="' + id +'"</textarea>');
    divEl.append('<button class=saveBtn></button>');

    //Fetch newly created HTML elements using class
    var hour = $('.hour');
    var textArea = $('.text-area');
    var saveBtn = $('.saveBtn');
    
    //Add one hour to startOfBusiness on each loop
    startOfBusiness.add(1, 'hours');
};

//Get textarea IDs to cross-reference against current time
// Create an empty array to store the ids
var idArray = [];
var i = 0;

// Loop through all the textarea tags
$('textarea').each(function () {
    
    // Getting the id of each textarea
    var idTextArea = $(this).attr('id');

     // Add to the array
    idArray.push(idTextArea);
});

//Iterate over the idArray and compare index value to currentTime
for (i = 0; i < idArray.length; i++) {


    if (idArray[i] == currentTime) {
        textArea.addClass("present");
    } else if (idArray[i] < currentTime) {
        textArea.addClass("past");
    } else if (idArray[i] > currentTime) {
        textArea.addClass("future");
    }
}

// if statement within an if statement to only add class to textareas with id lower than currentTime


// //Check if timeblock is past, present or future - not working
// var now = moment().format('h');
// // console.log(now);

// function calTime(){
//     if (startOfBusiness.isBefore(now)){
//         textArea.css('bacground-color', 'grey');
//     }
// }

// If textArea ID is < currentTime, add class 'past' to textArea
// If textArea ID is == currentTime, add class 'present' to textArea
// If textArea ID is > currentTime, add class 'future' to textArea





    