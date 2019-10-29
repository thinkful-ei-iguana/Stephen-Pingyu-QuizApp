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
    } else {
      $('.quiz-window').html(finalScore(STORE.score));
    }
  });
}

function renderQuestion() {
  let question = STORE.questions[STORE.currQuestion - 1];
  let answerList = question.answers;
  let renderAnswers = '';
  answerList.forEach(item => renderAnswers +=
        `<section class="options">
    <input type="radio" name="option" value="${item}" required>
    <label for="${item}">${item}</label>
    </section>`);
  $('.quiz-window').html(
    `<section class="trackers">
    <span class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</span>
    <span class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</span>
    </section>
    <h2 class="question">${question.question}</h2>
    <form id="answers">
    <ul>
    ${renderAnswers}
    </ul>
    <button class="submit-answer button"><span>Submit</span></button>
    </form>`);
}

function answerSubmit() {
  $('.quiz-window').on('submit', event => {
    event.preventDefault();
    let userAnswer = $('input:checked').val();
    let currentQuestion = STORE.questions[STORE.currQuestion - 1];
    let correctAnswer = currentQuestion.correctAns;
    if (userAnswer === correctAnswer) {
      STORE.userScore++;
      renderCorrectAnswer();
    } else {
      renderWrongAnswer(correctAnswer);
    }
  });
}


function renderPics() {
  for (let i = 0; i <= pics.length; i++) {
    $('.answer-pics').attr('src', `images/${i}.jpg`);
  }
}


function renderCorrectAnswer() {
  $('.quiz-window').html(
    `<section class="trackers">
    <span class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</span>
    <span class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</span>
    </section>
    <h2>Congratulations, you got it right!!!</h2>
    <img src="" alt="answer-pic" class="answer-pics images" width="300px">
    <p>You must be strong with in ways of the force.</p>
    <button class="start">Next</button>`
  );
};

function renderWrongAnswer(correct) {
  $('.quiz-window').html(
    `<section class="trackers">
    <span class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</span>
    <span class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</span>
    </section>
    <h2>You got it wrong...</h2>
    <img src="" alt="answer-pic" class="answer-pics simages" width="300px">
    <p>The correct answer is: <span id="corrected">${correct}</span></p>
    <p>Guess it's time to watch the movies again.</p>
    <button class="start">Next</button>`
  );
}

function finalScore() {
  if (STORE.userScore >= 3) {
    $('.quiz-window').html(
      `<section class="trackers">
      <p class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</p>
      <p class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</p>
      </section>
      <h2>WOW! You really know a lot!!!</h2>
      <img src="images/good.png" alt="happy face" class="images" width="300px">
      <p>You must be a Jedi Master like Yoda</p>
      <button class="restart">Restart</button>`
    );
  } else {
    $('.quiz-window').html(
      `<section class="trackers">
      <span class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</span>
      <span class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</span>
      </section>
      <h2>Better luck next time...</h2>
      <img src="images/bad.jpg" alt="sad face" class="images" width="300px">
      <p>Why dont you go ahead and try the quiz again.</p>
      <button class="restart">Restart</button>`
    );
  }
}

function restartQuiz() {
  $('.quiz-window').on('click', '.restart', event => {
    event.preventDefault();
    STORE.currQuestion = 0;
    STORE.userScore = 0;
    loadPage();
  });
}

function handleQuizApp() {
  loadPage();
  nextQuestion();
  answerSubmit();
  restartQuiz();
}

$(handleQuizApp);