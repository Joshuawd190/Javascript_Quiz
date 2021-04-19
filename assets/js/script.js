//start button
const startButton = document.getElementById("startbtn");
const startCard = document.getElementById("start-card");

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
    key: "",
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

var startGame = function () {
  //hide the start card
  console.log("working");
  startCard.classList.add("hide");
  //go to questions function
  headerDisplay.classList.remove("hide");
  quizMain.classList.remove("hide");
  quizQuestion(questionIndex);
};

var quizQuestion = function (questionIndex) {
  showQuestion(questionsArry[questionIndex]);
};

var showQuestion = function (questionsArry) {
  questionDisplay.textContent = questionsArry.q;
  answer1.textContent = questionsArry.a1;
  answer2.textContent = questionsArry.a2;
  answer3.textContent = questionsArry.a3;
  answer4.textContent = questionsArry.a4;
  answer1.addEventListener("click", checkAnswer);
  answer2.addEventListener("click", checkAnswer);
  answer3.addEventListener("click", checkAnswer);
  answer4.addEventListener("click", checkAnswer);
};

var checkAnswer = function (questionsArry) {};
// var quizQuestion = function (i) {
//   questionDisplay.textContent = questionsArry[i].q;
//   answer1.textContent = questionsArry[i].a1;
//   answer2.textContent = questionsArry[i].a2;
//   answer3.textContent = questionsArry[i].a3;
//   answer4.textContent = questionsArry[i].a4;
//   var checkAnswer

//   answer1.addEventListener("click", (e) => {
//     if (answer1.textContent === questionsArry[i].key) {
//       checkAnswer = true;
//     } else {
//       checkAnswer = false;
//     }
//   });
//   answer2.addEventListener("click", (e) => {
//     if (answer2.textContent === questionsArry[i].key) {
//       checkAnswer = true;
//     } else {
//       checkAnswer = false;
//     }
//   });
//   answer3.addEventListener("click", (e) => {
//     if (answer4.textContent === questionsArry[i].key) {
//       checkAnswer = true;
//     } else {
//       checkAnswer = false;
//     }
//   });
//   answer4.addEventListener("click", (e) => {
//     if (answer4.textContent === questionsArry[i].key) {
//       checkAnswer = true;
//     } else {
//       checkAnswer = false;
//     }
//   });

//   if (checkAnswer) {
//     indicator.innerHTML = "<h2>Correct!</h2>";
//     indicator.classList.remove("hide");
//   } else {
//     indicator.innerHTML = "<h2>Incorrect!</h2>";
//     indicator.classList.remove("hide");
//   }

//   questionIndex++;
//   quizQuestion(questionIndex);
// };

var endGame = function () {
  //display end card
  //display highscores
};

startButton.onclick = startGame;
