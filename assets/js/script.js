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

//variables

//questions
var questions = [
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

var score = 0;
