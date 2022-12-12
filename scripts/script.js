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

// While loop that loops to create 9-5 timeblocks
// For each loop, generate or build new HTML timeblock row
while (startOfBusiness.hour() < 18) {

    //Declare variable for checking time blocks against current time
    var timeBlock = startOfBusiness.format('H');

    //Variable to create ID value
    var id = timeBlock;

    var row = $('<row class="row"></row>');

    //Add/append hour, textarea and button to each row
    divEl.append(row);
    row.append('<div class="hour">' + startOfBusiness.format('ha') + '</div>')
    row.append('<textarea class="text-area" id="' + id + '"></textarea>');
    row.append('<button class="saveBtn">Save</button>');

    //Fetch newly created HTML elements using class

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
    var textAreaID = $(`#${idArray[i]}`);

    if (idArray[i] == currentTime) {
        textAreaID.addClass("present");
    } else if (idArray[i] < currentTime) {
        textAreaID.addClass("past");
    } else if (idArray[i] > currentTime) {
        textAreaID.addClass("future");
    }
}

// //Add event listener to saveBtn to get value from textArea and save to local storage
$(document).ready(function () {

    //         //This function is called when the button is clicked
    saveBtn.click(function (event) {
        var saveButton = $(event.target);
        var textArea = saveButton.siblings(".text-area");
        console.log(textArea);

        //             // val() method is used to get the values from textarea and store in toDoItem variable
        var text = textArea.val();
        alert(text);

        // 9am: text,
})
});

    // var userData = [
    //     {
    //     initials: value,
    //     score: finalScore
    //     }
    // ];



