'use strict';

const STORE = {
    questions: [
        //1
        {
            question: 'What is the name of Han Solo\'s ship?',
            answers: [
                'Lazy Millenial',
                'Millenium Falcon',
                'Gilded Eagle',
                'Saturn V'
            ],
            correctAns: 'Millenium Falcon'
        },
        //2
        {
            question: 'Who is Luke and Leia\'s mother?',
            answers: [
                'A Bantha',
                'Darth Vader',
                'Padme Amidala',
                'The Sarlacc'
            ],
            correctAns: 'Padme Amidala'
        },
        //3
        {
            question: 'What bounty hunter captures Han Solo?',
            answers: [
                'Bobba Fett',
                'Dog the Bounty Hunter',
                'Jabba the Hutt',
                'Darth Vader'
            ],
            correctAns: 'Bobba Fett'
        },
        //4
        {
            question: 'Whose DNA were the clones made from?',
            answers: [
                'Darth Tyranus',
                'Chewbacca',
                'Bobba Fett',
                'Jango Fett'
            ],
            correctAns: 'Jango Fett'
        },
        //5
        {
            question: 'Where does Yoda live?',
            answers: [
                'Las Vegas, NV',
                'The last house on the left',
                'Forever in our hearts',
                'Dagobah'
            ],
            correctAns: 'Dagobah'
        }
    ],
    currQuestion: 0,
    userScore: 0
}