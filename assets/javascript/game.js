var question = [
	["In Disney's 'Little Mermaid' what is the name of the human that Ariel falls in love with?", "Prince John", "Prince Eric", "Prince Charming", "Prince Shrek", 2, "../images/AnswerOne.jpeg"],
	["What is the name of the animated science fiction comedy-drama film release in 2002 bout a Hawaiian girl and her unsual pet?", "Moana", "Aloha", "Lilo & Stitch", "Surfs Up!", 3, "../images/AnswerTwo.png"],
	["In the Disney movie 'Beauty and the Beast', what is the name of Gaston's bumbling sidekick?", "LeFou", "Lumiere", "Belle", "Chip", 1, "../images/AnswerThree.jpeg"],
	["What was the name of the kleptomaniac monkey in the Disney movie 'Aladdin'?", "Abu", "Genie", "Jafar", "Rajah", 1, "../images/AnswerFour.jpeg"],
	["What is the name of Mickey Mouse's dog?", "Spot", "Daisy", "Kermit", "Pluto", 4,"../images/AnswerFive.gif"],
	["In which US city was Walt Disney born?", "Anaheim, CA", "New York, NY", "Chicago, IL", "Kissimmee, FL", 3, "../images/AnswerSix.jpg"],
	["In the movie 'Lion King', what was Simba's mother's name?", "Sarabi", "Faith", "Sahara", "Desert", 1, "../images/AnswerSeven.png"],
	["Which of the following names is NOT one of the 7 dwarves in 'Snow White and the Seven Dwarfs?'", "Sneezy", "Grumpy", "Happy", "Lazy", 4, "../images/AnswerEight.jpeg"],
	["In 'Pocahontas', what did Pocahontas see in her dream that made her believe that a change was coming?", "A spinning arrow", "A strange cloud formation", "A hawk circling her village", "A burning blue fire", 1, "../images/AnswerNine.png"],
	["In 'Frozen', how many brothers does Hans have?", 8,12,14,15,2,"../images/AnswerTen.png"],
];


$("#content").html("<h3>Instructions:</h3><p>You will have 30 seconds to answer each of the following questions. If no answer is picked within the 30 secons, the answer will be marked incorrect. Total score will be displayed at the end of the trivia questions.</p><button type='button' id='start'>Start!</button>")

var time;
var correctCount;
var wrongCount;

$("#start").on("click", function() {
	time = 31;
	timer();
	timerID = setInterval(timer,1000);
	questionDisplay(0);
	
});


var reset = function () {
	$("#timer").html(time + " seconds");
};

var timer = function() {
	time--;
	$("#timer").html(time + " seconds")

};

var questionDisplay = function(count) {
	var currentQuestion = question[count][0];
	$("#content").html("<div id='question'>" + currentQuestion + "</div>");
	var answer = question[count][5];
	for (var i=1; i<5; i++) {
		var answerDisplay = question[count][i];
		$("#content").append("<div class='answer' id='answer-"+i+"'>" + answerDisplay + "</div>");
		$("#answer-"+i).attr("data", i);
		console.log(i);
		alert("You lost");
	};

};