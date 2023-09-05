const questions = [
    {
        question: "What is JavaScript?",
        options: [
            "A coffee brand",
            "A Scripting language",
            "A type of car",
            "A new social media platform"
        ],
        answer: "A Scripting language"
    },
    {
        question: "What does 'DOM' stand for in JavaScript?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Dynamic Object Method",
            "Document Oriented Middleware"
        ],
        answer: "Document Object Model"
    },
    {
        question: "What does 'JS' stand for in JavaScript?",
        options: ["JavaScript", "JustScript", "JavaSource", "JScript"],
        answer: "JavaScript"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["variable", "declare", "var", "let"],
        answer: "var"
    },
    {
        question: "What is the result of the expression '2' + 2 in JavaScript?",
        options: ["4", "22", "TypeError", "NaN"],
        answer: "22"
    },
    {
        question: "Which built-in method adds one or more elements to the end of an array and returns the new length?",
        options: ["push()", "append()", "insert()", "addToEnd()"],
        answer: "push()"
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        options: ["'This is a comment", "//This is a comment", "#This is a comment", "/*This is a comment*/"],
        answer: "//This is a comment"
    },
    {
        question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        options: ["To create a new element", "To attach an event handler function to an element", "To delete an element", "To style an element"],
        answer: "To attach an event handler function to an element"
    },
    {
        question: "What is the output of the code: console.log(1 + '1') in JavaScript?",
        options: ["2", "'11'", "11", "NaN"],
        answer: "'11'"
    },
    {
        question: "Which of the following is NOT a data type in JavaScript?",
        options: ["Number", "Boolean", "Character", "String"],
        answer: "Character"
    },
    {
        question: "What will be the result of the expression: '5' == 5 in JavaScript?",
        options: ["true", "false", "NaN", "TypeError"],
        answer: "true"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const startButton = document.getElementById("start-button");
const resultsContainer = document.getElementById("results-container");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
        quizContainer.style.display = "block";
        resultsContainer.style.display = "none";
        quizContainer.innerHTML = `
            <div class="question">${currentQuestion.question}</div>
            <div class="options">
                ${currentQuestion.options.map(option => `<button class="option border-2 border-blue-500 hover:bg-blue-500 text-white px-4 py-2 rounded my-2 ml-4">${option}</button>`).join('')}
            </div>
        `;

        const optionButtons = document.querySelectorAll(".option");
        optionButtons.forEach(button => {
            button.addEventListener("click", () => checkAnswer(button.innerText));
        });
    } else {
        // End of quiz
        displayResults();
    }
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.answer === selectedAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function displayResults() {
    quizContainer.style.display = "none";
    resultsContainer.style.display = "block";
    resultsContainer.innerHTML = `<p class="text-6xl">Quiz completed! Your score: <span id="score-value text-5xl text-green-600">${score} </span>out of ${questions.length} </p>   `;
}

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    loadQuestion();
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
});
