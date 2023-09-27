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
var score = 0;
var onQuestion = 0;

var questions = [
    ["answer is 3", 3],
    ["answer is 1", 1],
    ["answer is 4", 4],
    ["answer is 3", 3],
    ["answer is 2", 2]
];

// === FUNCTIONS SEPERATED BY SECTION ===
// GENERAL FUNCTIONALITY
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
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            stopQuiz();
        }
    }, 1000);

    getNextQuestion();
}

function stopQuiz() {
    // show view highscores/hide timer, switch to enter initials section
    score = timeLeft;
    onQuestion = 0;
    viewScoresEl.setAttribute("style", "visibility: visible;");
    timerEl.setAttribute("style", "visibility: hidden;");
    if (score >= 0) {
        achievedScoreEl.textContent = score;
    }
    else {
        achievedScoreEl.textContent = "0";
    }
    showSection(enterInitialsSectionEl);
}

function getNextQuestion() {
    questionTextEl.textContent = questions[onQuestion][0];
}

function answerQuestion(answer) {
    if (answer == questions[onQuestion][1]) {
        // add hb and "correct!" for a few seconds
    } else {
        // add hb and "incorrect" for a few seconds
        timeLeft -= 20;
        timerEl.textContent = "Time: " + timeLeft;
    }

    onQuestion++;
    if (onQuestion >= questions.length) {
        stopQuiz();
    } else {
        getNextQuestion();
    }
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
// add event listeners to each button
// for whatever god-forsaken reason, this does not work in a for loop
answerBtnsEl[0].addEventListener("click", function () {
    answerQuestion(1);
    console.log(1);
});

answerBtnsEl[1].addEventListener("click", function () {
    answerQuestion(2);
    console.log(2);
});

answerBtnsEl[2].addEventListener("click", function () {
    answerQuestion(3);
    console.log(3);
});

answerBtnsEl[3].addEventListener("click", function () {
    answerQuestion(4);
    console.log(4);
});

// ENTER INITIALS FUNCTIONALITY


// HIGHSCORES FUNCTIONALTY
restartBtnEl.addEventListener("click", function () {
    showSection(startQuizSectionEl);
})