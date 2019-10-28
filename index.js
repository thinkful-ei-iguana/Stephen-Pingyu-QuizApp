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
  let question = STORE.questions[STORE.currQuestion];
  let answerList = question.answers;
  let renderAnswers = '';
  answerList.forEach(item => renderAnswers +=
    `<div>
    <input type="radio" name="question id="${item}" val="${item}"></input>
    <label for="${item}">${item}</label>
    </div>`);
  $('.quiz-window').html(
    `<p class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</p>
    <p class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</p>
    <h3 class="question">${question.question}</h3>
    <form>
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
  $('.quiz-window').on('click', '.submit-answer', event =>
    event.preventDefault();
    let givenAnswer = $('input: checked');
    let userAnswer = givenAnswer.val();
    let currentQuestion = STORE.questions[STORE.currQuestion];
    let correctAnswer = currentQuestion.correctAns;
    if (userAnswer === correctAnswer) {
      renderCorrectAnswer();
    }
    else {
      renderWrongAnswer();
    }
  );
}

function handleQuizApp() {
    loadPage();
    nextQuestion();
}

$(handleQuizApp);