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
        renderQuestion();
    });
}

function renderQuestion() {
    let question = STORE.questions[STORE.currQuestion];
    console.log(question, STORE.currQuestion);
    let answerList = question.answers;
    let renderAnswers = '';
    answerList.forEach(item => renderAnswers +=
        `
        <li>
        <label for="${item}">
    <input type="radio" name="question id="${item}" val="${item}">${item}</label>
    </li>
    `);
    $('.quiz-window').html(
        `<span class="question-tracker">Question: ${STORE.currQuestion} out of ${STORE.questions.length}</span>
    <span class="score-tracker">Score: ${STORE.userScore} out of ${STORE.questions.length}</span>
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

function handleQuizApp() {
    loadPage();
    nextQuestion();
}

$(handleQuizApp);