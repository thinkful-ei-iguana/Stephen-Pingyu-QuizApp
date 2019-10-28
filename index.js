'use strict';

function trackCurrQuestion() {
    STORE.currQuestion++;
}

function trackUserScore() {
    STORE.userScore++;
}

function loadPage() {
  $('.quiz-window').html(
    `<img src="images/chewy-naps.jpg" alt="chewy naps" class="images"></img>
      <br>
      <button type="button" id="start">Start Quiz</button>`
  );
}

function startQuiz() {
    $('#start').on('click', event => {
        event.preventDefault();
        return $('.quiz-window').html(renderQuestion());
    });
}

function renderQuestion() {

}

function handleQuizApp() {
    loadPage();
    startQuiz();
}

$(handleQuizApp);