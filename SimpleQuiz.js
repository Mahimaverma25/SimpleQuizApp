// Define the quiz questions and answers related to HTML, CSS, and JavaScript
const quizData = [
    {
        question: "What does HTML stand for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "High Text Markup Language",
            c: "Hyperlink Text Marking Language",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is used for styling a webpage?",
        options: {
            a: "HTML",
            b: "JavaScript",
            c: "CSS",
            d: "XML"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct syntax to link an external JavaScript file?",
        options: {
            a: "<script src='file.js'></script>",
            b: "<script href='file.js'></script>",
            c: "<js src='file.js'></js>",
            d: "<link src='file.js'></link>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: {
            a: "<ul>",
            b: "<ol>",
            c: "<li>",
            d: "<list>"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you select an element by its class in CSS?",
        options: {
            a: "#class-name",
            b: ".class-name",
            c: "class-name",
            d: "id class-name"
        },
        correctAnswer: "b"
    },
    {
        question: "Which property is used to change the font of an element in CSS?",
        options: {
            a: "font-family",
            b: "text-font",
            c: "font-size",
            d: "font-style"
        },
        correctAnswer: "a"
    },
    {
        question: "In JavaScript, which of the following is used to declare a variable?",
        options: {
            a: "let",
            b: "var",
            c: "const",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "What does CSS stand for?",
        options: {
            a: "Color Style Sheets",
            b: "Cascading Style Sheets",
            c: "Computer Style Sheets",
            d: "Creative Style Sheets"
        },
        correctAnswer: "b"
    },
    {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        options: {
            a: "push()",
            b: "pop()",
            c: "shift()",
            d: "unshift()"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML element is used to define a table row?",
        options: {
            a: "<td>",
            b: "<th>",
            c: "<tr>",
            d: "<table>"
        },
        correctAnswer: "c"
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

// Initialize the first question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

    // Set question text
    document.getElementById('Question').textContent = currentQuestion.question;

    // Set options
    document.getElementById('option_1').textContent = currentQuestion.options.a;
    document.getElementById('option_2').textContent = currentQuestion.options.b;
    document.getElementById('option_3').textContent = currentQuestion.options.c;
    document.getElementById('option_4').textContent = currentQuestion.options.d;
}

// Handle form submission
function handleSubmit() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    const answer = selectedAnswer.id;
    if (answer === quizData[currentQuestionIndex].correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // End the quiz
        document.getElementById('quiz').innerHTML = `
            <h2>Your score is ${score} out of ${quizData.length}</h2>
            <button onclick="restartQuiz()">Restart Quiz</button>
        `;
    }
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

// Initialize the quiz
loadQuestion();

// Add event listener for the submit button
document.getElementById('submit').addEventListener('click', handleSubmit);
