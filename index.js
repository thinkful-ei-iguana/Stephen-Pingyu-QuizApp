'use strict';

function renderStart() {
    //Renders first screen when users loads the page 
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
    //Renders the display when the user gets the answer correct
}

function renderWrongAnswer() {
    //Renders the display when the user answers incorrectly. Displaying the correct answer.
}

function renderFinal() {
    //Renders the last screen displaying the users score and displays a message dependant on how well they.

}