'use strict';

function loadPage() {
  $('.quiz-window').html(
    `<img src="images/chewy-naps.jpg" alt="chewy naps with porgs" class="images"></img>
      <br>
      <button type="button" class="start">Start Quiz</button>`
  );
}

function nextQuestion() {
  $('.quiz-window').on('click', '.start', event => {
    event.preventDefault();
    if (STORE.currQuestion < STORE.questions.length) {
      STORE.currQuestion++;
      $('.quiz-window').html(renderQuestion());
    }
    else {
      $('.quiz-window').html(finalScore(STORE.score));
    } 
  });
}

function renderQuestion() {
  let question = STORE.questions[STORE.currQuestion-1];
  let answerList = question.answers;
  let renderAnswers = '';
  answerList.forEach(item => renderAnswers +=
    `<div class="options">
    <input type="radio" name="option" val="${item}"></input>
    <label for="${item}">${item}</label>
    </div>`);
  $('.quiz-window').html(
    `<div class="trackers">
    <p class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</p>
    <p class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</p>
    </div>
    <h2 class="question">${question.question}</h2>
    <form id="answers">
    ${renderAnswers}
    <button class="submit-answer button"><span>Submit</span></button>
    </form>`
  );
}

function answerSubmit() {
  $('.quiz-window').on('click', '.submit-answer', event => {
    event.preventDefault();
    let userAnswer = $('input[name=option]:checked').val();
    let currentQuestion = STORE.questions[STORE.currQuestion - 1];
    let correctAnswer = currentQuestion.correctAns;
    if (userAnswer === correctAnswer) {
      STORE.score++;
      renderCorrectAnswer();
    }
    else {
      renderWrongAnswer(correctAnswer);
      console.log(userAnswer);
      console.log(correctAnswer);
    }
  });
}

function renderCorrectAnswer() {
  $('.quiz-window').html(
    `<div class="trackers">
    <p class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</p>
    <p class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</p>
    </div>
    <h2>Congratulations, you got it right!!!</h2>
    <p>You must be strong with in ways of the force.</p>
    <button class="start">Next</button>`
  );
}

function renderWrongAnswer(correct) {
  $('.quiz-window').html(
    `<div class="trackers">
    <p class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</p>
    <p class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</p>
    </div>
    <h2>You got it wrong...</h2>
    <p>The correct answer is: ${correct}</p>
    <p>Guess it's time to watch the movies again.</p>
    <button class="start">Next</button>`
  );
}

function finalScore(score) {
  if (score >= 3) {
    $('.quiz-window').html(
      `<div class="trackers">
      <p class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</p>
      <p class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</p>
      </div>
      <h2>WOW! You really know a lot!!!</h2>
      <p>You must be a Jedi Master like Yoda</p>
      <button classs="restart">Restart</button>`
    );
  }
  else {
    $('.quiz-window').html(
      `<div class="trackers">
      <p class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</p>
      <p class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</p>
      </div>
      <h2>Better luck next time...</h2>
      <p>Why dont you go ahead and try the quiz again.</p>
      <button class="restart">Restart</button>`
    );
  }
}

function restartQuiz() {
  $('.quiz-window').on('click', '.restart', event => {
    event.preventDefault();
    STORE.currQuestion = 0;
    STORE.score = 0;
    loadPage();
  })
}

function handleQuizApp() {
  loadPage();
  nextQuestion();
  answerSubmit();
  restartQuiz();
}

$(handleQuizApp);