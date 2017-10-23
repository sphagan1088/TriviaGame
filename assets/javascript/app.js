 var rightAnswers = 0;
 var wrongAnswers = 0;
 var unAnswered = 0;



$(document).ready(function() {

	$("#end-game").hide();
	$("#questions").hide();



	function timer() {

	var countdown = setInterval(function() {

		var counter = parseInt($("#show-timer").html());

		if(counter !== 0) {

			$("#show-timer").html(counter - 1);

		} else { 

			$("#end-game").show();
			$("#questions").hide();
			clearInterval(countdown);




		}

	}, 1000);

	console.log(parseInt($("#show-timer").html()));
	};


	// when the start button is clicked, the rules and start btn are hidden
	// questions and timer is shown and the timer starts
	$(".start-btn").on("click", function() {

	timer();
	$("#rules").hide();
	$(".start-btn").hide();
	$("#questions").show();
	});

	//if the done button is clicked the user sees how many qustions 
	// they answered right, wrong, or left blank
	$("#done-btn").on("click", function(){


		$("#questions").hide();
		$("#end-game").show();
		check();
	});

	function check() {


		var Q1 = $("input:radio[name='q1']:checked").val();
		if(Q1 === undefined){
			unAnswered++;


		} else if(Q1 === "1939") {
			rightAnswers++;

		} else {
			wrongAnswers++;
		}

		console.log(rightAnswers);

		$("#correct-answers").html(rightAnswers);
		$("#incorrect-answers").html(wrongAnswers);
		$("#not-answered").html(unAnswered);
	}
	


});