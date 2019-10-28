'use strict';

<<<<<<< HEAD
function startQuiz() {
  $('.start-button').on('submit', event => {
    event.preventDefault();
    $('.quiz-window').html(renderQuestion());
  });
=======
function renderStart() {
    //Renders first screen when users loads the page
<<<<<<< HEAD
=======
    $('.quiz-window').html(
   ');
    ) 
>>>>>>> cf308648b9ac75c3a5e4e05cb26310f79ab27643
>>>>>>> a6e402e6f7a347bf21dc79bd781505377841d68b
}

function renderQuestion() {
    //Renders each of the questions based on the info stored in the Questions array\
    const questionsHtml = $(`
    <section>
      <form id='js-questions' class='questions-form'>
      <fieldset>
        <div class = 'question'>
          <legend>${questions.question}</legend>
        </div>

        <div class='options'>
          <div class='js-options'>
          </div>
        </div>

        <div class='q-submit'>
          <button type='submit' id='answer'>Submit</button>
          <button type='button' id='next'>Next</button>
        </div>
        </fieldset>
      </form>
    </section>`);
}

function renderCorrectAnswer() {
<<<<<<< HEAD
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
    restartQuiz
=======
  //Renders the page when an answer is correct
  $('.quiz-window').html(
    `<h3>Star Wars</h3>
    <h4 class="wrong-correct-title">YOU GOT IT!!!</h4>
    <p class="wrong-correct-text>The Force is strong with this one!</p>
    <button type="submit" class="next-question js-next-question">Next Question</button>`
  )
}

function renderWrongAnswer() {
  //Renders the display when the user answers incorrectly. Displaying the correct answer.

}

function renderFinal() {
  //Renders the last screen displaying the users score and displays a message dependant on how well they.
}

function handleQuizApp(){
  renderStart();
  handleQuiz();
  handleSelectOption();
  restartQuiz();
}
>>>>>>> cf308648b9ac75c3a5e4e05cb26310f79ab27643

$(handleQuizApp());