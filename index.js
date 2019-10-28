'use strict';

function loadPage() {
  $('.quiz-window').html(
    `<img src="images/chewy-naps.jpg" alt="chewy naps with porgs" class="images"></img>
      <br>
      <button type="button" id="start">Start Quiz</button>`
  );
}

function nextQuestion() {
  $('#start').on('click', event => {
    event.preventDefault();
    STORE.currQuestion++;
    $('.quiz-window').html(renderQuestion()); 
  });
}

function renderQuestion() {
  let question = STORE.questions[STORE.currQuestion-1];
  let answerList = question.answers;
  let renderAnswers = '';
  answerList.forEach(item => renderAnswers +=
    `<div>
    <input type="radio" name="question" id="${item}" val="${item}"></input>
    <label for="${item}">${item}</label>
    </div>`);
  $('.quiz-window').html(
    `<div class="trackers">
    <p class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</p>
    <p class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</p>
    </div>
    <h3 class="question">${question.question}</h3>
    <form id="answers">
    <div class="options">
    <ul>
    ${renderAnswers}
    </ul>
    </div>
    <button class="submit-answer button"><span>Submit</span></button>
    </form>`
  );
}

function answerSubmit() {
  $('.quiz-window').on('click', '.submit-answer', event => {
    event.preventDefault();
    let userAnswer = $( 'input:checked' ).val();
    let currentQuestion = STORE.questions[STORE.currQuestion - 1];
    let correctAnswer = currentQuestion.correctAns;
    if (userAnswer === correctAnswer) {
      STORE.score++;
      renderCorrectAnswer();
    }
    else {
      renderWrongAnswer(correctAnswer);
      console.log(userAnswer);
    }
  });
}

function renderCorrectAnswer() {
  $('.quiz-window').html(
    `<div class="trackers">
    <p class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</p>
    <p class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</p>
    </div>
    <h3>Congratulations, you got it right!!!</h3>
    <p>You must be strong with in ways of the force.</p>
    <button type="button" id="start">Next</button>`
  );
}

function renderWrongAnswer(correct) {
  $('.quiz-window').html(
    `<div class="trackers">
    <p class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</p>
    <p class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</p>
    </div>
    <h3>You got it wrong...</h3>
    <p>Guess it's time to watch the movies again.</p>
    <button type="button" id="start">Next</button>`
  )
}

function handleQuizApp() {
  loadPage();
  nextQuestion();
  answerSubmit();
}

$(handleQuizApp);