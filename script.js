window.onload = function () {
    createQuiz();
    startTimer();
};

var progress = 0;
var correct = 0;

var questions = [
    {
        question: "What does HTML stand for?",
        A: "Hyperbole Madeup Language",
        B: "Hypertext Markup Language",
        C: "Hero Market Language",
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
        question: "Which is the largest heading?",
        A: "h10",
        B: "h6",
        C: "h1",
        answer: "C"
    },
    {
        question: "Which type of document is best to use to format colors on a webpage?",
        A: "HTML",
        B: "CSS",
        C: "JavaScript",
        answer: "B"
    },
    {
        question: "What does CSS stand for?",
        A: "Computer Styling Sheets",
        B: "Cascading Style Sheets",
        C: "Coloring Styled Sheets",
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
    // display the question
    quiz.innerHTML = "<br /> <h3>" + question + "</h3><br />";
    // display the answer options

    quiz.innerHTML += "<label> <input type='radio' name='answers' value='A'> " + questions[progress].A + "</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='answers' value='B'> " + questions[progress].B + "</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='answers' value='C'> " + questions[progress].C + "</label><br><br>";
    quiz.innerHTML += "<button class='btn' onClick='checkAnswer()'>Submit Answer</button>";
    document.getElementById("progress").innerHTML = "Question " + (progress + 1) + " of " + questions.length;


};

// checks if answer matches the correct choice
function checkAnswer() {
    var answers = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].type === 'radio' && answers[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = answers[i].value;

            if (value == questions[progress].answer) {
                correct++
            }
        }
    }
    // changes position of which question user is on
    if (progress < questions.length) 
      
    progress++ 
        
    console.log(progress)
    if (progress == questions.length) {
        showForm();
    }
    else {createQuiz()}  
    console.log(correct);

};

var buttons = document.querySelectorAll(".btn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', checkAnswer, false);
}

function showForm() {
    document.getElementById("submitscore").style.display = "block";
};

var subbut = document.getElementById("subHS");

subbut.addEventListener('click', function(event){
    event.preventDefault()
    window.location = "highscore.html"
    
})
//timer here