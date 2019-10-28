'use strict';

function trackCurrQuestion() {
    STORE.currQuestion++;
}

function trackUserScore() {
    STORE.userScore++;
}

function startQuiz() {
    $('.quiz-window').on('submit', '#start', event => {
        event.preventDefault();
        return $('.quiz-window').html(renderQuestion());
    });

}

function renderQuestion() {
    //Renders each of the questions based on the info stored in the Questions array
    if (STORE.currQuestion < STORE.questions.length) {
        return generateQuestion(STORE.currQuestion);
    } else {
        return renderFinal();
    }
}

function generateQuestion(questions) {
    let questionNum = STORE[STORE.currQuestion];
    let answersNum = questionNum.answers;
    return `
  <span class="question-tracker">${STORE.currQuestion}</span>
  <span class="score-tracker">${STORE.userScore}</span>
  <p class="question">${questionNum.question}</p>
  <form class="answers">
    <input type="radio" for="${answersNum[0]}">
      <label class="answer" id="${answersNum[0]}>${answersNum[0]}</label>
    <input type="radio" for="${answersNum[1]}">
      <label class="answer" id="${answersNum[1]}>${answersNum[1]}</label>
    <input type="radio" for="${answersNum[2]}">
      <label class="answer" id="${answersNum[2]}>${answersNum[2]}</label>
    <input type="radio" for="${answersNum[3]}">
      <label class="answer" id="${answersNum[3]}>${answersNum[3]}</label>
  `;
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
    startQuiz();
    renderQuestion();
    renderCorrectAnswer();
    renderWrongAnswer();
    renderFinal();
}

$(handleQuizApp());