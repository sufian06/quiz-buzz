import React from 'react';

const Checkbox = ({option}) => {
    return (
        <div>
            <input className='mr-2' type="radio" name="option" id="" />
            <label htmlFor="option">{option}</label>
        </div>
    );
};

export default Checkbox;