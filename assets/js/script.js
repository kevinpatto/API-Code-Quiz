// variables spaced out by section
var viewScoresEl = document.querySelector("#view-score-span");
var timerEl = document.querySelector("#timer-span");

var startQuizSectionEl = document.querySelector("#start-quiz");
var startQuizBtnEl = document.querySelector("#start-btn");

var quizSectionEl = document.querySelector("#quiz");
var questionTextEl = document.querySelector("#question");
var answerBtnsEl = [
    document.querySelector("#a1"),
    document.querySelector("#a2"),
    document.querySelector("#a3"),
    document.querySelector("#a4")
];

var enterScoreSectionEl = document.querySelector("#enter-score");
var achievedScoreEl = document.querySelector("#achieved-score-span");
var inputEl = document.querySelector("#initials-input");
var submitBtnEl = document.querySelector("#submit-btn");

var highscoresSectionEl = document.querySelector("#highscores");
var scoresLiEl = document.querySelector("#scores");

// FUNCTIONS
function showLeaderboard() {
    startQuizSectionEl.setAttribute("style", "visibility: collapse;");
    quizSectionEl.setAttribute("style", "visibility: collapse;");
    enterScoreSectionEl.setAttribute("style", "visibility: collapse;");
    highscoresSectionEl.setAttribute("style", "visibility: visible;");
}

// HEADER FUNCTIONALITY
viewScoresEl.addEventListener("click", showLeaderboard);