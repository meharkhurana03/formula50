const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "Nico Rosberg won his sole F1 world title in which year?",
    answers: {
      a: "2014",
      b: "2015",
      c: "2016",
      d: "2017"
    },
    correctAnswer: "c"
  },
  {
    question: "How many Grand Prix's did the Jordan F1 team win between 1995 and 2005?",
    answers: {
      a: "2",
      b: "4",
      c: "5",
      d: "6"
    },
    correctAnswer: "b"
  },
  {
    question: "Who is the youngest driver to win an F1 race?",
    answers: {
      a: "Lewis Hamilton",
      b: "Sebastian Vettel",
      c: "Michael Schumacher",
      d: "Max Verstappen"
    },
    correctAnswer: "d"
  },
  {
    question: "Lewis Hamilton won his first F1 world championship title with which team?",
    answers: {
      a: "Williams",
      b: "Mercedes",
      c: "McLaren",
      d: "Ferrari"
    },
    correctAnswer: "b"
  },
  {
    question: "At what circuit was the European Grand Prix held in 1997?",
    answers: {
      a: "Circuito Permanente de Jerez, Spain",
      b: "Circuit de Spa-Francorchamps, Belgium",
      c: "Silverstone, England",
      d: "Circuit de Catalunya"
    },
    correctAnswer: "a"
  },
  {
    question: "How many world titles did Michael Schumacher win?",
    answers: {
      a: "8",
      b: "5",
      c: "7",
      d: "6"
    },
    correctAnswer: "c"
  },
  {
    question: "Scottish driver David Coulthard claimed his 13th and final race victory at which event?",
    answers: {
      a: "Australian Grand Prix 2003",
      b: "British Grand Prix 2003",
      c: "British Grand Prix 2004",
      d: "Australian Grand Prix 2004"
    },
    correctAnswer: "a"
  },
  {
    question: "How many races did Michael Schumacher's brother Ralf win?",
    answers: {
      a: "5",
      b: "6",
      c: "8",
      d: "9"
    },
    correctAnswer: "b"
  },
  {
    question: "Who was the first ever F1 Champion?",
    answers: {
      a: "Nino Farina",
      b: "Juan Manuel Fangio",
      c: "Luigi Fagioli",
      d: "Reg Parnell"
    },
    correctAnswer: "a"
  },
  {
    question: "Which team holds the record for the most wins in a season?",
    answers: {
      a: "Ferrari",
      b: "Williams",
      c: "Renault",
      d: "Mercedes"
    },
    correctAnswer: "d"
  }
];


function buildQuiz(){
    const output = [];

  // for each question...
    myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
            <br>
          </label>
          <br>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <br>
        <div class="answers"> ${answers.join('')} </div>
        <br>
        <br>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){// gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);