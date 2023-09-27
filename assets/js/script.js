// === VARIABLES SEPERATED BY SECTION ===
// HEADER
var viewScoresEl = document.querySelector("#view-score-span");
var timerEl = document.querySelector("#timer-span");

// START QUIZ SECTION
var startQuizSectionEl = document.querySelector("#start-quiz");
var startQuizBtnEl = document.querySelector("#start-btn");

// QUIZ SECTION
var quizSectionEl = document.querySelector("#quiz");
var questionTextEl = document.querySelector("#question");
var answerBtnsEl = [
    document.querySelector("#a1"),
    document.querySelector("#a2"),
    document.querySelector("#a3"),
    document.querySelector("#a4")
];

// ENTER INITIALS SECTION
var enterScoreSectionEl = document.querySelector("#enter-initials");
var achievedScoreEl = document.querySelector("#achieved-score-span");
var inputEl = document.querySelector("#initials-input");
var submitBtnEl = document.querySelector("#submit-btn");

// HIGHSCORES SECTION
var highscoresSectionEl = document.querySelector("#highscores");
var scoresLiEl = document.querySelector("#scores");

// FUNCTIONALITY VARIABLES
var timeLeft = 69;

// FUNCTIONS
function showLeaderboard() {
    startQuizSectionEl.setAttribute("style", "visibility: collapse;");
    quizSectionEl.setAttribute("style", "visibility: collapse;");
    enterScoreSectionEl.setAttribute("style", "visibility: collapse;");
    highscoresSectionEl.setAttribute("style", "visibility: visible;");
}

// HEADER FUNCTIONALITY
viewScoresEl.addEventListener("click", showLeaderboard);
var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft == 0) {
        clearInterval(timerInterval);
    }
}, 1000);