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
var enterInitialsSectionEl = document.querySelector("#enter-initials");
var achievedScoreEl = document.querySelector("#achieved-score-span");
var inputEl = document.querySelector("#initials-input");
var submitBtnEl = document.querySelector("#submit-btn");

// HIGHSCORES SECTION
var highscoresSectionEl = document.querySelector("#highscores");
var scoresLiEl = document.querySelector("#scores");
var restartBtnEl = document.querySelector("#restart-btn");
var clearBtnEl = document.querySelector("#clear-scores-btn");

// GENERAL FUNCTIONALITY VARIABLES
var timeLeft = 90;

// === FUNCTIONS SEPERATED BY SECTION ===
// GENERAL FUNCTIONALITY
function init() {
    timerEl.textContent = "Time: " + timeLeft;
    showStartQuiz();
}

function showSection(section) {
    if (section === startQuizSectionEl) {
        startQuizSectionEl.setAttribute("style", "visibility: visible;");
    } else {
        startQuizSectionEl.setAttribute("style", "visibility: collapse;");
    }

    if (section === quizSectionEl) {
        quizSectionEl.setAttribute("style", "visibility: visible;");
    } else {
        quizSectionEl.setAttribute("style", "visibility: collapse;");
    }

    if (section === enterInitialsSectionEl) {
        enterInitialsSectionEl.setAttribute("style", "visibility: visible;");
    } else {
        enterInitialsSectionEl.setAttribute("style", "visibility: collapse;");
    }

    if (section === highscoresSectionEl) {
        highscoresSectionEl.setAttribute("style", "visibility: visible;");
    } else {
        highscoresSectionEl.setAttribute("style", "visibility: collapse;");
    }
}

// HEADER FUNCTIONALITY
viewScoresEl.addEventListener("click", showSection(highscoresSectionEl));
var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft == 0) {
        clearInterval(timerInterval);
    }
}, 1000);

// START QUIZ SECTION FUNCTIONALITY

init();