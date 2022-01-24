// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//questions and variables 
var questionsArr = [
    { prompt: "How do you create a function in JavaScript?",
      choices:["1. function:myFunction()", "2. function myFunction()", "3. function=myFunction()", "4. myFunction=function()"],
      answer: "2. function myFunction()" },

    {prompt: "Commonly used data types in JS do NOT include:",
     choices:["1. strings", "2. booleans", "3. alerts", "4. numbers"],
     answer: "3. alerts"},

    {prompt: "The first index of an array is ____.",
     choices: ["1. 0", "2. 1", "3. 8", "4. any"],
     answer: "1. 0"},

    {prompt:"How do you add a comment in a JavaScript?",
     choices: ["1. *This is a comment *", "2. <!--This is a comment-->", "3. 'This is a comment", "4. //This is a comment"],
     answer: "4. //This is a comment" },

    {prompt: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["1. commas", "2. quotation marks", "3. curly brackets", "4. parenthesis"],
    answer: "2. quotation marks"}
];

var questionIndex = 0;
var score = 0;
var scoreEl = document.getElementById('score')
var timerId
var time = questionsArr.length * 15; //15 seconds per question
var timeEl = document.getElementById('timeLeft') //time remaining
var startBtn = document.getElementById('start-quiz') // start quiz btn
var startEl = document.getElementById('startDiv') // start div container
var questions = document.getElementById('questions') // quiz questions
var userPrompt = document.getElementById('prompt')
var checkAnswer = document.getElementById('checkAnswer')
var viewScore = document.getElementById('scoreBoard')

const submitBtn = document.getElementById('submit') //submit button
const highScoreList = 5;
const highScore = 'highScores';

document.getElementById('btn').style.display = "none";
viewScore.classList.add('hide')
questions.setAttribute('id', 'questions')

//toggle hidden attribute
function startQuiz() {
    startEl.classList.add('hide');
    questions.classList.remove('hide')
    timerId = setInterval(clockTick, 1000);

    timeEl.textContent = time;
   // scoreEl.textContent= score;
    newQuestion();
}

//timer function
function clockTick() {
    time --;
    timeEl.textContent = time;

    if(time<=0) {
       console.log('Your time is up!')
    }
} 

//answer response function
function answerResponse () {

}


//new question populates
function newQuestion() {
    var currentQuestion = questionsArr[questionIndex];
    var choicesEl = document.getElementById('choices')
    var title = document.createElement('h2');
    title.textContent = currentQuestion.prompt;
    userPrompt.innerHTML = "";
    userPrompt.appendChild(title);

    

//Empty out choices div in HTML
    choicesEl.innerHTML =  "";
    currentQuestion.choices.forEach(function(choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute('id','btn');
        choiceBtn.setAttribute('value', choice);
        choiceBtn.textContent = choice;
        choiceBtn.onclick = choiceClick;
        choicesEl.appendChild(choiceBtn)
    })
}

function choiceClick() {
    
    if(this.value !== questionsArr[questionIndex].answer) {
        time -=10
    } 
    else if(this.value === questionsArr[questionIndex].answer) {
         score+=10; //store score in local storage
         document.getElementById('score').innerHTML = score;
    } 
        
    if(time <= 0) {
            !time === 0;
        };

    questionIndex++;

    if(questionIndex === questionsArr.length || questionsArr.length === 0) {
            window.alert("The quiz is over")
            clearInterval(timerId)
            questions.classList.add('hide');

    } else {
        newQuestion();
    }
};

function quizEnd () {

}


//ability to view and clear high scores
function checkHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem(highScores)) ?? [];
    const lowestScore = highScores[highScoreList - 1]?.score ?? 0;
    
    if (score > lowestScore) {
      saveHighScore(score, highScores); // TODO
      showHighScores(); // TODO
    }
  };

//time remaining
startBtn.onclick = startQuiz;