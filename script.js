var progress = 0;
var correct = 0;
var quiz, question, questions, answer, answers, A, B, C;

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
{   question: "Which code would you use to create a button in HTML?",
        A: "<button>",
        B: "{button}",
        C: "button()",
        answer: "A"
},
{
    question: "Which is the largest heading?",
        A: "h10",
        B: "h6",
        C: "h1",
        answer: "C"
},
{
    question: "Where in an HTML document would you link a CSS stylesheet?",
        A: "In the <body> tag",
        B: "In the <head> tag",
        C: "In the <footer> tag",
        answer: "B"
},
{ 
    question: "What is an example of a self-closing tag?",
        A: "The <br> tag",
        B: "The <a> tag",
        C: "The <html> tag",
        answer: "A"
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
    question: "What HTML element represents JavaScript?",
        A: "<script>",
        B: "<style>",
        C: "<rel=stylesheet>",
        answer: "A"
},
{
    question: "How would you create an alert in JavaScript?",
        A: "box('message')",
        B: "alert{'message'}",
        C: "alert('message')",
        answer: "C"
}];

function get (x) {
    return document.getElementById(x);
}

function createQuiz () {
    quiz = get("#quiz");
    if (progress >= questions.length){
        quiz.innerHTML = "Your score is" + correct;
        get("#progress").innerHTML = "Game Over!";
    progress = 0;
    correct = 0;
    return false; 
    }
get ("#progress") = "Question" + (progress + 1) + "of" + questions.length;
question = questions[progress].question;
A = questions[progress].A;
B = questions[progress].B;
B = questions[progress].C;
// display the question
quiz.innerHTML = "<h3>"+question+"</h3>";
// display the answer options
// the += appends to the data we started on the line above
quiz.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+A+"</label><br>";
quiz.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+B+"</label><br>";
quiz.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+C+"</label><br><br>";
quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    answers = document.getElementsByName("answers");
    for(var i=0; i<answers.length; i++){
      if(answers[i].checked){
        answer = answers[i].value;
      }
    }
    // checks if answer matches the correct choice
    if(answer == questions[progress].answer){
      //each time there is a correct answer this value increases
      correct++;
    }
    // changes position of which character user is on
    progress++;
    // then the renderQuestion function runs again to go to next question
    createQuiz();
  }
  window.addEventListener("load", createQuiz);