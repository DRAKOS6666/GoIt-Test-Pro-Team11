import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testOperations, testSelectors } from 'redux/qaTest';

import styles from './TestForm.module.css';

const TestForm = () => {
    const testData = useSelector(testSelectors.getTestData);
    const dispatch = useDispatch();


    const handleTheoryTest = event => {
        event.preventDefault();
        dispatch(testOperations.getTestTheoryQuestion());
    }
    const handleТесhTest = event => {
        event.preventDefault();
        dispatch(testOperations.getTechQuestion());
    }

    return (<form className={styles.form}>
        <button onClick={handleTheoryTest} >Theory test</button>
        <button onClick={handleТесhTest} >Tech test</button>
        {testData && <div>
            <ol>
                {testData.map(testQuestion => <li key={testQuestion.questionId}>
                    <h3><span> questionID: {testQuestion.questionId}</span> {testQuestion.question}</h3>
                    <ul>
                        {testQuestion.answers.map((answer, index) => <li key={index}>{answer}</li>)}
                    </ul>
                </li>)}

            </ol>
        </div>}
    </form>);
};
export default TestForm;