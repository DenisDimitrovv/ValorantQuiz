let infoButton = document.getElementById("infoButton");
let popup = document.getElementById("popupContainer");
let closeButton = document.getElementById("closeButton");
let quiz = document.getElementById("quiz");
let nextButton = document.getElementById("nextButton");

const questions = [
  {
    image: "img/marshal.png",
    question: "What is the name of this weapon?",
    answers: ["Phantom", "Sheriff", "Classic", "Marshall"],
    correctAnswer: "Marshall"
  },
  {
    image: "img/phantom.png",
    question: "What is the name of this weapon?",
    answers: ["Vandal", "Guardian", "Phantom", "Operator"],
    correctAnswer: "Phantom"
  },
];

let currentQuestionIndex = -1;

function displayRandomQuestion() {
  const quizContainer = document.getElementById('quiz');
  const randomIndex = Math.floor(Math.random() * questions.length);
  currentQuestionIndex = randomIndex;
  
  const questionData = questions[randomIndex];
  
  quizContainer.innerHTML = `
    <img src="${questionData.image}">
    <h1>${questionData.question}</h1>
    <div class="answers-container">
      ${questionData.answers.map((answer, index) => `
        <button class="quiz-answers" id="answer${index + 1}" onclick="checkAnswer(event, '${answer}')">${answer}</button>
      `).join('')}
    </div>
    <div id="feedback"></div>
    <button type="submit" id="nextButton" onclick="displayRandomQuestion()">Next</button>
  `;
}


displayRandomQuestion();

function checkAnswer(event, selectedAnswer) {
  const questionData = questions[currentQuestionIndex];
  const selectedButton = event.target;
  const nextButton = document.getElementById('nextButton');
  
  if (selectedAnswer === questionData.correctAnswer) {
    selectedButton.style.backgroundColor = "green";
    nextButton.disabled = false;
  }
  else {
    selectedButton.style.backgroundColor = "red";
    nextButton.disabled = true;
  }
}

function openPopup() {
  popup.classList.add("open-popup");
  quiz.remove("quiz-closed");
}

function closePopup() {
  popup.classList.remove("open-popup");
  window.location = "/";
}