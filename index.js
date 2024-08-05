let infoButton = document.getElementById("infoButton");
let popup = document.getElementById("popupContainer");
let closeButton = document.getElementById("closeButton");
let quiz = document.getElementById("quiz");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

const answers = [answer1, answer2, answer3, answer4];
const correctAnswer = answer4;


function checkAnswer(event) {
  let selectedButton = event.target;

    if(selectedButton === correctAnswer) {
      selectedButton.style.backgroundColor = "green";
      answers.forEach(button => {
        button.disabled = true;
      });
    }
    else {
      selectedButton.style.backgroundColor = "red";
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

