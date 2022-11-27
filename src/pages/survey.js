import '../components/survey.css';
import {Link} from "react-router-dom";

import React, { useState } from 'react';

    const Survey = () => {
    const questions = [
        // _____________________________________________________paniccccc_________________________________________________________________________
        {
            questionText: 'How many panic and limited symptoms attacks did you have during the week?',
            answerOptions: [
                { answerText: 'No panic'},
                { answerText: 'Mild'},
                { answerText: 'Moderate'},
                { answerText: 'Severe'},
                { answerText: 'Extreme'},
            ],
        },
        {
            questionText: 'If you had any panic attacks during last week, how distressing were they?',
            answerOptions: [
                { answerText: 'Not at all'},
                { answerText: 'Mild'},
                { answerText: 'Moderate'},
                { answerText: 'Severe' },
                { answerText: 'Extreme' },
            ],
        },
        {
            questionText: 'During the past week, how much have you worried or felt anxious?',
            answerOptions: [
                { answerText: 'Not at all' },
                { answerText: 'Occasionally' },
                { answerText: 'Very often' },
                { answerText: 'Constantly' },
            ],
        },
        {
            questionText: 'During the past week were there any places or situations you avoided, or felt afraid of?',
            answerOptions: [
                { answerText: 'none' },
                { answerText: 'Mild' },
                { answerText: 'Moderate' },
                { answerText: 'Severe' },
                { answerText: 'Extreme' },
            ],
        },
        // ____________________________________________________anixetyyy__________________________________________________________________________

        {
            questionText: 'Feeling nervous, anxious or on edge?',
            answerOptions: [
                { answerText: 'Yes' },
                { answerText: 'No' },
            ],
        },
        {
            questionText: 'Not being able to stop or control worrying?',
            answerOptions: [
                { answerText: 'Yes' },
                { answerText: 'No' },
            ],
        },
        {
            questionText: 'Worrying too much about different things?',
            answerOptions: [
                { answerText: 'Yes' },
                { answerText: 'No' },
            ],
        },
        {
            questionText: 'Feeling afraid as if something awful might happen?',
            answerOptions: [
                { answerText: 'Yes' },
                { answerText: 'No' },
            ],
        },


        // _______________________________________________________adhd_______________________________________________________________________


        {
            questionText: 'How often do you feel restless or fidgety?',
            answerOptions: [
                { answerText: 'Never' },
                { answerText: 'Rarely' },
                { answerText: 'Sometimes' },
                { answerText: 'Often' },
                { answerText: 'Very often' },
            ],
        },
        {
            questionText: ' How often do you interrupt others when they are busy?',
            answerOptions: [
                { answerText: 'Never' },
                { answerText: 'Rarely' },
                { answerText: 'Sometimes' },
                { answerText: 'Often' },
                { answerText: 'Very often' },
            ],
        },
        {
            questionText: 'How often do you have difficulty concentrating?',
            answerOptions: [
                { answerText: 'Never' },
                { answerText: 'Rarely' },
                { answerText: 'Sometimes' },
                { answerText: 'Often' },
                { answerText: 'Very often' },
            ],
        },
        {
            questionText: 'How often are you distracted by activity or noise around you?',
            answerOptions: [
                { answerText: 'Never' },
                { answerText: 'Rarely' },
                { answerText: 'Sometimes' },
                { answerText: 'Often' },
                { answerText: 'Very often' },
            ],
        },


        // _________________________________________________________depresssionn_____________________________________________________________________


        {
            questionText: 'Little interest or pleasure in doing things??',
            answerOptions: [
                { answerText: 'Never' },
                { answerText: 'Rarely' },
                { answerText: 'Sometimes' },
                { answerText: 'Often' },
                { answerText: 'Very often' },
            ],
        },
        {
            questionText: 'Poor appetite or overeating?',
            answerOptions: [
                { answerText: 'Poor appetite' },
                { answerText: 'Over eating' },
            ],
        },
        {
            questionText: 'Trouble falling or staying asleep, or sleeping too much?',
            answerOptions: [
                { answerText: 'Never' },
                { answerText: 'Rarely' },
                { answerText: 'Sometimes' },
                { answerText: 'Often' },
                { answerText: 'Very often' },
            ],
        },
        {
            questionText: 'Trouble concentrating on things, such as reading(books,newspaper ...) or watching television??',
            answerOptions: [
                { answerText: 'Never' },
                { answerText: 'Rarely' },
                { answerText: 'Sometimes' },
                { answerText: 'Often' },
                { answerText: 'Very often' },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section text-gray-700'>
                    Thank You for your valuable Time and Information!!
                    <br/>
                    <Link to="/Solutions" className="py-3 px-6 text-white bg-blue-800 rounded-3xl text-4xl mx-1 " >Next</Link>
                </div>
            ) : (
                <>
                    <div className='question-section '>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
export  default  Survey;