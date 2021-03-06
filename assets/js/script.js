//start button
const startCard = document.getElementById("start-card");
const startButton = document.getElementById("startbtn");

//Top display
const headerDisplay = document.getElementById("display");
const scoreLink = document.getElementById("score-link");
const timerDisplay = document.getElementById("timer");

//main quiz area
const quizMain = document.getElementById("quiz-main");
const questionDisplay = document.getElementById("question-text");
const answer1 = document.getElementById("A1");
const answer2 = document.getElementById("A2");
const answer3 = document.getElementById("A3");
const answer4 = document.getElementById("A4");
const indicator = document.getElementById("indicator");

//end card display
const endCard = document.getElementById("endcard");
const finalScore = document.getElementById("finalscore");
const scoreName = document.getElementById("highscore-name");
const submitBtn = document.getElementById("submit");

//highscore display
const highscoreDisplay = document.getElementById("highscore-card");
const highscoreList = document.getElementById("highscore-list");
const tryAgainBtn = document.getElementById("try-again");
const clearScores = document.getElementById("clear");

let timer = 300;
let questionIndex = 0;
let questionsArry = [
  {
    q: "JavaScript is what type of language?",
    a1: "Object-oriented",
    a2: "Functional",
    a3: "English",
    a4: "Web-API",
    key: "Object-oriented",
  },
  {
    q: "What type of variable contains a number?",
    a1: "String",
    a2: "Boolean",
    a3: "Int",
    a4: "Null",
    key: "Int",
  },
  {
    q: "Always end your lines in a _",
    a1: "comma",
    a2: "curly brace",
    a3: "semi-colon",
    a4: "colon",
    key: "semi-colon",
  },
  {
    q: "Arrays start at what index?",
    a1: "1",
    a2: "Start",
    a3: "2",
    a4: "0",
    key: "0",
  },
  {
    q: "Variable functions must be declared _____",
    a1: "At the beginning",
    a2: "Before they are used",
    a3: "At the end",
    a4: "In the middle",
    key: "Before they are used",
  },
];

var captureAnswer;
var startGame = function () {
  //hide the start card
  console.log("working");
  startCard.classList.add("hide");
  //go to questions function
  headerDisplay.classList.remove("hide");
  quizMain.classList.remove("hide");
  quizQuestion();
};

var quizQuestion = function () {
  //check questions remaining, time remaining, call end game if either is 0 or less
  if (questionIndex > questionsArry.length - 1 || timer <= 0) {
    endGame();
  } else {
    showQuestion(questionsArry[questionIndex]);
  }
};

var showQuestion = function (questionsArry) {
  console.log(questionsArry);
  questionDisplay.textContent = questionsArry.q;
  answer1.textContent = questionsArry.a1;
  answer2.textContent = questionsArry.a2;
  answer3.textContent = questionsArry.a3;
  answer4.textContent = questionsArry.a4;

  answer1.addEventListener("click", getAnswer);
  answer2.addEventListener("click", getAnswer);
  answer3.addEventListener("click", getAnswer);
  answer4.addEventListener("click", getAnswer);
};

var getAnswer = function () {
  console.log(this);
  captureAnswer = this.textContent;
  console.log(captureAnswer);
  checkAnswer(captureAnswer);
};

var checkAnswer = function (captureAnswer) {
  console.log(captureAnswer);
  console.log(questionsArry[questionIndex].key);

  if (captureAnswer === questionsArry[questionIndex].key) {
    indicator.innerHTML = "<h2>Correct!</h2>";
    indicator.classList.remove("hide");
  } else {
    indicator.innerHTML = "<h2>Incorrect!</h2>";
    indicator.classList.remove("hide");
    timer = timer - 10;
  }
  questionIndex++;
  quizQuestion();
};

var endGame = function () {
  //display end card
  headerDisplay.classList.add("hide");
  quizMain.classList.add("hide");
  endCard.classList.remove("hide");
  finalScore.innerText = timer;
  //display highscores
};

startButton.onclick = startGame;
