// When the window loads, the functions to display the quiz questions and start the timer, begin.
window.onload = function () {
    createQuiz();
    startTimer();
};
// The progress variable refers to the number question you are on within the questions array
var progress = 0;
// The correct variable refers to the number of questions you have gotten correct
var correct = 0;

var questions = [
    {
        question: "What does JSON stand for?",
        A: "JavaScript On Notes",
        B: "JavaScript Object Notation",
        C: "JavaScript Over Nodes",
        answer: "B"
    },
    {
        question: "What are the return options for a boolean?",
        A: "Yes, No",
        B: "Confirm, Deny",
        C: "True, False",
        answer: "C"
    },
    {
        question: "What file type is correct?",
        A: ".java",
        B: ".javascript",
        C: ".js",
        answer: "C"
    },
    {
        question: "Which type of element holds multiple variables?",
        A: "Var",
        B: "Array",
        C: "ID",
        answer: "B"
    },
    {
        question: "What is the purpose of a prompt?",
        A: "To give the user information",
        B: "To allow the user to input information",
        C: "To direct the user to the next page",
        answer: "B"
    },

    {
        question: "How would you create an alert in JavaScript?",
        A: "box('message')",
        B: "alert{'message'}",
        C: "alert('message')",
        answer: "C"
    }];

function createQuiz() {
    quiz = document.getElementById("quiz");
    question = questions[progress].question;
    // Displays the question, and which question you are on below
    quiz.innerHTML = "<br /> <h3>" + question + "</h3><br />";
    
    //Displays the possible answers for each question
    quiz.innerHTML += "<label> <input type='radio' name='answers' value='A'> " + questions[progress].A + "</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='answers' value='B'> " + questions[progress].B + "</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='answers' value='C'> " + questions[progress].C + "</label><br><br>";
    quiz.innerHTML += "<button class='btn' onClick='checkAnswer()'>Submit Answer</button>";
    document.getElementById("progress").innerHTML = "Question " + (progress + 1) + " of " + questions.length;


};

// Checks if your choice matches the answer
function checkAnswer() {
    var answers = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].type === 'radio' && answers[i].checked) {
            value = answers[i].value;

            if (value == questions[progress].answer) {
                correct++
            }
        } else if (value != questions[progress].answer) {
            secondsLeft -= 5;
        }
    }
   // Moves through the questions array until the length of the array is reached
    if (progress < questions.length)

        progress++
// When you reach the end of the quiz, it runs a function to end the quiz
    if (progress == questions.length) {
        showForm();
    }
    else { createQuiz() }
    console.log(correct);

};

var buttons = document.querySelectorAll(".btn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', checkAnswer, false);
}
// Show form function shows the form to input the name you want to associate with your score,
// Also displays your final score
function showForm() {
    document.getElementById("submitscore").style.display = "block";
    document.getElementById("progress").innerHTML = "Final Score:" + " " + (correct * 10);
};

var subbut = document.getElementById("subHS");
// The functions below create the information that will be shown on the leaderboard

function createHighScore() {
    event.preventDefault();
    var score = (correct * 10);
    var scoreList = [];
    scoreList.unshift(score);
    var nameList = document.getElementById("name").value;
    document.getElementById("form").addEventListener("submit", function (e) {
        e.preventDefault()
        JSON.stringify(localStorage.setItem("name", nameList));
        JSON.stringify(localStorage.setItem("score", scoreList));
        createList();
    })
 console.log (nameList, score)

 
function createList() {
    var hsName = JSON.parse(localStorage.getItem("name"));
    var hsScore = JSON.parse(localStorage.getItem("score"));
    document.querySelector("#one").textContent = hsName;
    document.querySelector("#one").textContent = ": " + hsScore;
};







};

// Shows the leaderboard after clicking the submit button
subbut.addEventListener('click', function (event) {
    event.preventDefault()
    //window.location = "highscore.html"
    document.getElementById("quiz").innerHTML = "<h2> Leaderboard </h2>";
    document.getElementById("submitscore").style.display = "none";
    document.getElementById("progress").style.display = "none";
    document.getElementById("time").style.display = "none";
    document.getElementById("leaderboard").style.display = "block";
    createHighScore();
})
// This code runs the timer
var secondsLeft = 60;
var timeEl = document.getElementById("time");

function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer:" + " " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

}
