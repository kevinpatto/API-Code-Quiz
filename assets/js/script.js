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
var timeLeft = 0;

// === FUNCTIONS SEPERATED BY SECTION ===
// GENERAL FUNCTIONALITY
function init() {
    // initialize page
    timerEl.textContent = "Time: " + timeLeft;
    showStartQuiz();
}

function startQuiz() {
    // start timer
    timeLeft = 90;
    timerEl.textContent = "Time: " + timeLeft;

    // hide view highscores, show timer
    viewScoresEl.setAttribute("style", "visibility: hidden;");
    timerEl.setAttribute("style", "visibility: visible;");

    showSection(quizSectionEl);
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft == 0) {
            stopQuiz();
        }
    }, 1000);
}

function stopQuiz() {
    // stop timer, show view highscores/hide timer, switch to enter initials section
    clearInterval(timerInterval);
    viewScoresEl.setAttribute("style", "visibility: visible;");
    timerEl.setAttribute("style", "visibility: hidden;");
    showSection(enterInitialsSectionEl);
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
viewScoresEl.addEventListener("click", function () {
    showSection(highscoresSectionEl);
});

// START QUIZ SECTION FUNCTIONALITY
startQuizBtnEl.addEventListener("click", startQuiz);

// QUIZ FUNCTIONALITY


// ENTER INITIALS FUNCTIONALITY

// HIGHSCORES FUNCTIONALTY
restartBtnEl.addEventListener("click", function () {
    showSection(startQuizSectionEl);
})

init(); // initialize page