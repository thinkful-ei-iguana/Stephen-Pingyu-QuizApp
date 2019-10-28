'use strict';

function startQuiz() {
  $('.start-button').on('submit', event => {
    event.preventDefault();
    $('.quiz-window').html(renderQuestion());
  });

}

function renderQuestion() {
  //Renders each of the questions based on the info stored in the Questions array
  if (STORE.currQuestion < STORE.questions.length) {
    return generateQuestion(currQuestion); 
  }
  else {
    return renderFinal();
  }

function renderCorrectAnswer() {
  //Renders the page when an answer is correct
  $('.answer').html(
    `<h4 class="wrong-correct-title">YOU GOT IT!!!</h4>
    <p class="wrong-correct-text>You must have you're head in the stars!</p>
    <button type="submit" class="next-question>Next Question</button>`
  )
}

function renderWrongAnswer() {
  //Renders the display when the user answers incorrectly. Displaying the correct answer.
}

function renderFinal() {
  //Renders the last screen displaying the users score and displays a message dependant on how well they.
}

function handleQuizApp() {
  quizStart();
  handleQuiz();
  handleSelectOption();
  restartQuiz()
}
$(handleQuizApp());