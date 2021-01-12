const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let correctCount = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  correctCount = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (correct){
      correctCount++
  }
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    alert(`Your points is ${correctCount}`)
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
let questions = [
    {
    id: 1,
        question: "Which of the following sports is not part of the triathlon?",
        answers: [
            { text: 'Horse riding', correct: true },
            { text: 'Cycling', correct: false },
            { text: 'Swimming', correct: false },
            { text: 'Running', correct: false },
        ]   
    },
    {
    
    id: 2,
        question: "How many football players should be on the field at the same time?",
        answers: [
            { text: '22', correct: true },
            { text: '24', correct: false },
            { text: '20', correct: false },
            { text: '26', correct: false },
        ]
    },
    { 
    
    id: 3,
        question: "Who won the 2016 Formula 1 World Championship?",
        answers: [
            { text: 'Nico Rosberg', correct: true },
            { text: 'Lewis Hamilton', correct: false },
            { text: 'Max Verstappen', correct: false },
            { text: 'Kimi Raikkonen', correct: false },
        ]
    },
    {
    id: 4,
        question: "What team won the 2016 MLS Cup?",
        answers: [
            { text: 'Seattle Sounders', correct: true },
            { text: 'Colorado Rapids', correct: false },
            { text: 'Montreal Impact', correct: false },
            { text: 'Toronto FC', correct: false },
        ]
    },
    {
    id: 5,
        question: "Which player holds the NHL records of 2,857 points ?",
        answers: [
            { text: 'Wayne Gretzy', correct: true },
            { text: 'Mario Lemieux', correct: false },
            { text: 'Sidney Crosby', correct: false },
            { text: 'Gordie Howe', correct: false },
        ]
    }
]