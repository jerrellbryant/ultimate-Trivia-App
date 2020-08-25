import React from 'react';
// Types
import { AnswerObject } from '../App'
// Styles
import {Wrapper, ButtonWrapper} from '../QuestionCard.Styles'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = ({
                                                  question,
                                                  answers,
                                                  callback,
                                                  userAnswer,
                                                  questionNumber,
                                                  totalQuestions
}) => (
    <Wrapper>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}/>
        <div>
            {answers.map( ans => (
                <ButtonWrapper
                    key={ans}
                    correct={userAnswer?.correctAnswer === ans}
                    userClicked={userAnswer?.answer === ans}
                >
                    <button disabled={!!userAnswer} value={ans} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: ans}}/>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
)
