let infoButton = document.getElementById("infoButton");
let popup = document.getElementById("popupContainer");
let closeButton = document.getElementById("closeButton");
let quiz = document.getElementById("quiz");
let nextButton = document.getElementById("nextButton");
let wrongAnswer = document.getElementById("wrong-answer");


const questions = [
  {
    image: "img/weapon1.png",
    question: "What is the name of this weapon?",
    answers: ["Phantom", "Sheriff", "Classic", "Marshall"],
    correctAnswer: "Marshall"
  },
  {
    image: "img/map1.png",
    question: "On which map is this place?",
    answers: ["Sunset", "Lotus", "Icebox", "Pearl"],
    correctAnswer: "Icebox"
  },
  {
    image: "img/weapon2.png",
    question: "What is the name of this weapon?",
    answers: ["Vandal", "Guardian", "Phantom", "Operator"],
    correctAnswer: "Phantom"
  },
  {
    image: "img/weapon3.png",
    question: "What is the name of this weapon?",
    answers: ["Sheriff", "Operator", "Ghost", "Bucky"],
    correctAnswer: "Sheriff"
  },
  {
    image: "img/agent1.png",
    question: "Who is this agent?",
    answers: ["Raze", "Reyna", "Killjoy", "Jet"],
    correctAnswer: "Raze"
  },
  {
    image: "img/knife1.png",
    question: "What is the name of this knife skin?",
    answers: ["Xenohunter", "Evori’s Spellcaster", "Kaimana", "Eternal Sovereign"],
    correctAnswer: "Xenohunter"
  },
  {
    image: "img/country1.png",
    question: "From which country Astra is?",
    answers: ["Ghana", "India", "United Kingdom", "United States"],
    correctAnswer: "Ghana"
  }
];

let currentQuestionIndex = -1;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let recentQuestions = [];

function displayRandomQuestion() {
  const quizContainer = document.getElementById('quiz');

  let availableQuestions = questions.filter((_, index) => !recentQuestions.includes(index));

  if (availableQuestions.length === 0) {
    recentQuestions = [];
    availableQuestions = [...questions];
  }

  const randomIndex = questions.indexOf(availableQuestions[Math.floor(Math.random() * availableQuestions.length)]);
  currentQuestionIndex = randomIndex;

  recentQuestions.push(randomIndex);
  if (recentQuestions.length > 3) {
    recentQuestions.shift();
  }

  const questionData = questions[randomIndex];
  const shuffledAnswers = shuffleArray([...questionData.answers]);

  quizContainer.innerHTML = `
    <img id="questionImage" src="${questionData.image}">
    <h1>${questionData.question}</h1>
    <div class="answers-container">
      ${shuffledAnswers.map((answer, index) => `
        <button class="quiz-answers" id="answer${index + 1}" onclick="checkAnswer(event, '${answer}')">${answer}</button>
      `).join('')}
    </div>
    <p id="wrongAnswer"></p>
    <button type="submit" id="nextButton" disabled onclick="displayRandomQuestion()">Next</button>
  `;
}



displayRandomQuestion();  

function checkAnswer(event, selectedAnswer) {
  const questionData = questions[currentQuestionIndex];
  const selectedButton = event.target;
  const nextButton = document.getElementById('nextButton');


  if (selectedAnswer === questionData.correctAnswer) {
    selectedButton.style.backgroundColor = "rgb(50,205,50)";
    nextButton.classList.add("correct-answer");
    nextButton.classList.add("hover-enabled");
    nextButton.disabled = false;
  }
  else {
    selectedButton.style.backgroundColor = "red";
    nextButton.classList.remove("correct-answer");
    nextButton.classList.remove("hover-enabled");
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