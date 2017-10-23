 var rightAnswers = 0;
 var wrongAnswers = 0;
 var unAnswered = 0;
 



$(document).ready(function() {
	//hide the end game screen and the questions screen until start is clicked
	//or end game

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
			check();
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

		// clearInterval(countdown);
		$("#questions").hide();
		$("#end-game").show();
		check();
	});

	function check() {


		var Q1 = $("input:radio[name='q1']:checked").val();
		var Q2 = $("input:radio[name='q2']:checked").val();
		var Q3 = $("input:radio[name='q3']:checked").val();
		var Q4 = $("input:radio[name='q4']:checked").val();
		var Q5 = $("input:radio[name='q5']:checked").val();
		var Q6 = $("input:radio[name='q6']:checked").val();
		var Q7 = $("input:radio[name='q7']:checked").val();
		var Q8 = $("input:radio[name='q8']:checked").val();
		var Q9 = $("input:radio[name='q9']:checked").val();
		var Q10 = $("input:radio[name='q10']:checked").val();


		if(Q1 === undefined){
			unAnswered++;


		} else if(Q1 === "1939") {
			rightAnswers++;

		} else {
			wrongAnswers++;
		}

		if(Q2 === undefined){
			unAnswered++;


		} else if(Q2 === "George S. Patton") {
			rightAnswers++;

		} else {
			wrongAnswers++;
		}

		if(Q3 === undefined){
			unAnswered++;


		} else if(Q3 === "B-29 Superfortress") {
			rightAnswers++;

		} else {
			wrongAnswers++;
		}

		if(Q4 === undefined){
			unAnswered++;


		} else if(Q4 === "The Royal Air Force") {
			rightAnswers++;

		} else {
			wrongAnswers++;
		}

		if(Q5 === undefined){
			unAnswered++;


		} else if(Q5 === "Operation Overlord") {
			rightAnswers++;

		} else {
			wrongAnswers++;
		}

		if(Q6 === undefined){
			unAnswered++;


		} else if(Q6 === "Finland and Russia") {
			rightAnswers++;

		} else {
			wrongAnswers++;
		}

		if(Q7 === undefined){
			unAnswered++;


		} else if(Q7 === "Churchill, Truman and Stalin") {
			rightAnswers++;

		} else {
			wrongAnswers++;
		}

		if(Q8 === undefined){
			unAnswered++;


		} else if(Q8 === "USS Missouri") {
			rightAnswers++;

		} else {
			wrongAnswers++;
		}

		if(Q9 === undefined){
			unAnswered++;


		} else if(Q9 === "General Eisenhower") {
			rightAnswers++;

		} else {
			wrongAnswers++;
		}

		if(Q10 === undefined){
			unAnswered++;


		} else if(Q10 === "Poland") {
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