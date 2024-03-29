var questions = [
    {
        title: "1)  How do we print to console?",
        choices: ["console.log ();", "consolelog();", "console{};", "log.console();"],
        answer: "console.log ();"
    },
    
    { 
        title: "2)  Any type of element can be stored in an array.",
        choices: ["true", "false"],
        answer: "true"
    },

    {   
        title: "3)  What is a boolean?", 
        choices: ["a value that represents true or false.", "a shared place to store project files and revision history.", "a list of elements.", "a password"],
        answer: "a value that represents true or false"
    },

    {  
        title: "4)  Items stored in local storage have no expiration time.",
        choices: ["true", "false"],
        answer: "true"
    }, 

    {
        title: "5)  Once an element is stored in an array it cannot be removed.",
        choices: ["true", "false"],
        answer: "false"
    },
]; 

var allotted = 75000;
var timer;
var score = 75000;
var quiz = [];
var startTime;

function buildQuiz () {
    clearTimeout(timer);
	timer = setTimeout("calculateScore()", allotted);

	goNext(0);

    
    var quiz = [ ];
    var answers = [ ];
    for (i = 0; i < questions.length; i++)
    {
        answers = [];
        for (j = 0; j < questions[i].choices.length; j ++) 
        
        {
            answers.push('<label><input type="radio" name= "grouping" onchange="answerQuestion('+i+', \''+questions[i].choices[j]+'\')">' + questions[i].choices[j] + '</label><br>');
        }
            quiz.push(
                '<div class="question">' + questions[i].title + '</div>' + '<div class="answers">' + answers.join(' ') + '</div>'
                );


    }
    document.getElementById("quiz").innerHTML = quiz.join("");
}
var startTime;
function goNext (qnum) {
    questionTimer = setTimeout("answerQuestion("+qnum+",'time_ran_out')", 15000);
    startTime = (new Date()).getTime();
    var quiz = [];
    var answers = [];
    document.getElementById("quiz").innerHTML = " ";
    for(j = 0; j < questions[qnum].choices.length;j++)
    {
        answers.push('<label><input type="radio" name= "grouping" onchange="answerQuestion('+qnum+', \''+questions[qnum].choices[j]+'\')">' + questions[qnum].choices[j] + '</label><br>');
       }
       quiz.push(
        '<div class="question">' + questions[qnum].title + '</div>' + '<div class="answers">' + answers.join(' ') + '</div>'
        );
        document.getElementById("quiz").innerHTML = quiz.join("");
}

function answerQuestion(qnum, choice) 
{
	var timespent = Math.abs((new Date()).getTime() - startTime);
	if (questions[qnum].answer == choice)
	{
		score -= timespent;
	}
	else 
	{
		score -= 15000;
	}
	console.log("time spent" + timespent);
	console.log("current score" + score);
	qnum += 1;
	clearTimeout(questionTimer);
	if (qnum != questions.length)
	{
		goNext(qnum);
	}
	else
	{
		calculateScore();
	}
	
}

function calculateScore()
{
	var endscore = Math.abs(score/1000);
	score = 0;
	alert('END SCORE: ' + endscore);
}

    document.querySelector("button").addEventListener("click", function(){
        let h1Tag = document.querySelector("h1");
        h1Tag.style.display = 'none';
    })