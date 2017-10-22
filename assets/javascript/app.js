// You'll create a trivia form with multiple choice or true/false options (your choice).
// The player will have a limited amount of time to finish the quiz.
// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

//User clicks start and it loads the game screen

//Once the user clicks start, the timer starts and 
//questions are shown.

//the game ends when the user either runs out of time or answers 
//all the questions and clicks the done button

var counter = 60;
var right = 0;
var wrong = 0;
var unanswered = 0;
var intervalId; 


	



//onclicks, once start button is clicked, start button is hidden
//as well as rules. Then the timer and questions are shown

	$(".start-btn").on("click", function() {
	$(".start-btn").hide();
	$("p").hide();
	$(".timer").show();
	$("form").show();
	$("start-btn").on("click", timer);

	});



//function that stops the game when either the timer runs out or
// the user clicks the done button
function stop () {

}

//function for a timer that runs for 60 seconds
function timer () {
	intervalId = setInterval(decrement, 1000);


}

function decrement() {
	

}