'use strict';

function trackCurrQuestion() {
  STORE.currQuestion++;
}

function trackUserScore() {
  STORE.userScore++;
}

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
    trackCurrQuestion();
    $('.quiz-window').html(renderQuestion()); 
  });
}

function renderQuestion() {
  let question = STORE.questions[STORE.currQuestion];
  console.log(question, STORE.currQuestion);
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
    ${renderAnswers}
    <button class="submit-answer"><span>Submit</span></button>
    </form>`
  );
}

function handleQuizApp() {
  loadPage();
  nextQuestion();
}

$(handleQuizApp);