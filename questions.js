var questions = [
    {
        title: "How do we print to console?",
        choices: ["console.log ();", "consolelog();", "console{};", "log.console();"],
        answer: "console.log ();"
    },
    
    { 
        title: "Any type of element can be stored in an array.",
        choices: ["true", "false"],
        answer: "true"
    },

    {   
        title: "What is a boolean?", 
        choices: ["a value that represents true or false.", "a shared place to store project files and revision history.", "a list of elements.", "a password"],
        answer: "a value that represents true or false"
    },

    {  
        title: "Items stored in local storage have no expiration time.",
        choices: ["true", "false"],
        answer: "true"
    }, 

    {
        title: "Once an element is stored in an array it cannot be removed.",
        choices: ["true", "false"],
        answer: "false"
    },
]; 

var alotted = 75000;
var timer;
var score = 0;

function buildQuiz () {
    setTimeout(function(){
        alert("Hello"); }, 75000);
    var quiz = [ ];
    var answers = [ ];
    for (i = 0; i < questions.length; i++)
    {
        answers = [];
        for (j = 0; j < questions[i].choices.length; j ++) 
        
        {
            answers.push('<input type="radio">' + questions[i].choices[j] + '<input>');
        }
            quiz.push(
                '<div class="question">' + questions[i].title + '</div>' + '<div class="answers">' + answers.join(' ') + '</div>'
                );


    }
    document.getElementById("quiz").innerHTML = quiz.join("");
}

 // Start Quiz -- onclick hide elements and show questions

    // timeinterval decrease 

    // store and increment scores in localstorage

    // endgame on timer 0  

    // create an event listener on button

    document.querySelector("button").addEventListener("click", function(){
        let h1Tag = document.querySelector("h1");
        h1Tag.style.display = 'none';
    })