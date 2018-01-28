var questionArray = [
	{
		question: "In Disney's 'Little Mermaid' what is the name of the human that Ariel falls in love with?",
		answerOne: "Prince John", 
		answerTwo: "Prince Eric", 
		answerThree: "Prince Charming", 
		answerFour: "Prince Shrek", 
		correctAnswer: "Prince Eric",
		image: "assets/images/AnswerOne.jpeg",
	},
	{
		question: "What is the name of the animated science fiction comedy-drama film release in 2002 bout a Hawaiian girl and her unsual pet?",
		answerOne: "Moana", 
		answerTwo: "Aloha", 
		answerThree: "Lilo & Stitch", 
		answerFour: "Surfs Up!", 
		correctAnswer: "Lilo & Stitch",
		image: "assets/images/AnswerTwo.png",
	},
	{
		question: "In the Disney movie 'Beauty and the Beast', what is the name of Gaston's bumbling sidekick?", 
		answerOne: "LeFou", 
		answerTwo: "Lumiere", 
		answerThree: "Belle", 
		answerFour: "Chip", 
		correctAnswer: "LeFou",
		image: "assets/images/AnswerThree.jpeg",
	},
	{
		question: "What was the name of the kleptomaniac monkey in the Disney movie 'Aladdin'?", 
		answerOne: "Abu", 
		answerTwo: "Genie", 
		answerThree: "Jafar", 
		answerFour: "Rajah", 
		correctAnswer: "Abu",
		image: "assets/images/AnswerFour.jpeg",
	},
	{
		question: "What is the name of Mickey Mouse's dog?", 
		answerOne: "Spot", 
		answerTwo: "Daisy", 
		answerThree: "Kermit", 
		answerFour: "Pluto", 
		correctAnswer: "Pluto",
		image: "assets/images/AnswerFive.gif",
	},
	{
		question: "In which US city was Walt Disney born?", 
		answerOne: "Anaheim, CA", 
		answerTwo: "New York, NY", 
		answerThree: "Chicago, IL", 
		answerFour: "Kissimmee, FL", 
		correctAnswer: "Chicago, IL",
		image: "assets/images/AnswerSix.jpg",
	},
	{
		question: "In the movie 'Lion King', what was Simba's mother's name?", 
		answerOne: "Sarabi", 
		answerTwo: "Faith", 
		answerThree: "Sahara", 
		answerFour: "Desert", 
		correctAnswer: "Sarabi", 
		image: "assets/images/AnswerSeven.png",
	},
	{
		question: "Which of the following names is NOT one of the 7 dwarves in 'Snow White and the Seven Dwarfs?'", 
		answerOne: "Sneezy", 
		answerTwo: "Grumpy", 
		answerThree: "Happy", 
		answerFour: "Lazy", 
		correctAnswer: "Lazy", 
		image: "assets/images/AnswerEight.jpeg",
	},
	{
		question: "In 'Pocahontas', what did Pocahontas see in her dream that made her believe that a change was coming?", 
		answerOne: "A spinning arrow", 
		answerTwo: "A strange cloud formation", 
		answerThree: "A hawk circling her village", 
		answerFour: "A burning blue fire", 
		correctAnswer: "A spinning arrow", 
		image: "assets/images/AnswerNine.png",
	},
	{
		question:"In 'Frozen', how many brothers does Hans have?", 
		answerOne: "8",
		answerTwo: "12",
		answerThree: "14",
		answerFour: "15",
		correctAnswer: "12",
		image: "assets/images/AnswerTen.png",
	}
]

var correctCount=0;
var wrongCount=0;
var time;
var i=0;
var questionTimer;
var currentTimer;

$("#content").html("<h3>Instructions:</h3><p>You will have 30 seconds to answer each of the following questions. If no answer is picked within the 30 secons, the answer will be marked incorrect. Total score will be displayed at the end of the trivia questions.</p><button type='button' id='start'>Start!</button>");

 $(document).on("click", "#start", function(){
 	if (i<10){
 		currentQuestion(i);
 	}
 	else {
 		finalScore();
 	}
 });


var currentQuestion = function(count){
	questionDisplay(count);
	time = 30;	
	$("#timer").html("Time left: " + time + " seconds<br><br>");
	currentTimer = setInterval(timer, 1000);
	questionTimer = setTimeout(function(){questionTimeOut(count)},30000);
	$(".answer").on("click", function() {
		clearTimeout(questionTimer);
		clearInterval(currentTimer);
		var currentAnswer = $(this).attr("data-value")
		if (currentAnswer === questionArray[count].correctAnswer) {
			$("#content").html("<p class='question'>You got the right answer! </p><br><br><button type='button' id='start'>next</button><br><br>");
			$("#content").append("<div><img src='" +  questionArray[count].image  + "' alt='answer' height='200px'/></div>");
			correctCount++;
			i++;
		}
		else {
			$("#content").html("<p class='question'>You got the wrong answer! </p><br><br><button type='button' id='start'>next</button><br><br>");
			$("#content").append("<div><img src='" +  questionArray[count].image  + "' alt='answer' height='200px'/></div>");
			wrongCount++;
			i++;
		}
	})
}

var timer = function() {
	if (time > 0) {
		time --;
		$("#timer").html("Time left: " + time + " seconds<br><br>");
	}
	else if (time = 0){
		$("#timer").html("Time over!<br><br>");
		wrongCount ++;
		}
	else {
		$("#timer").html("Time over!<br><br>");
		}
}

var questionTimeOut = function(count) {
	$("#timer").html("Time over!");
	clearTimeout(questionTimer);
	clearInterval(currentTimer);
	$("#content").html("<p class='question'>You ran out of time! The correct answer was:</p> <br><br>" + questionArray[count].correctAnswer + "<br><br><button type='button' id='start'>next</button><br><br>");
	$("#content").append("<div><img src='" +  questionArray[count].image  + "' alt='answer' height='200px'/></div>");
};


var questionDisplay = function(count){
	
	var a = $("<div>");
	a.append("<div class='question'>" +questionArray[count].question + "</div><br><br>");
	a.append("<div class='answer' data-value='" + questionArray[count].answerOne + "'>" + questionArray[count].answerOne +  "</div><br><br>");
	a.append("<div class='answer' data-value='" + questionArray[count].answerTwo + "'>" + questionArray[count].answerTwo +  "</div><br><br>");
	a.append("<div class='answer' data-value='" + questionArray[count].answerThree + "'>" + questionArray[count].answerThree +  "</div><br><br>");
	a.append("<div class='answer' data-value='" + questionArray[count].answerFour + "'>" + questionArray[count].answerFour +  "</div><br><br>");
	$("#content").html(a);

};

 var finalScore = function(){
 	$("#content").html("<p id = 'grand'>Great job! You're all done. Final Score: <br><br>Number of questions correct: "+correctCount+"<br><br>Number of questions wrong: "+wrongCount +"</p>");
 	$("#timer").empty();
 }



