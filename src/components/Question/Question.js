import React from 'react';

const Question = ({q}) => {
    console.log(q)
    const {question, options} = q
    return (
        <div>
            <p>{question}</p>
            {options.map((option, idx) => <li key={idx}>{option}</li>)}
        </div>
    );
};

export default Question;