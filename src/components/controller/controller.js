import React from 'react';
import './controller.css';

const Controller = (props) => {
    return (
        <div className='controller'>
            <input type="text" onChange={props.handleInput} value={props.inputValue} onKeyDown={props.handleKeyDown}></input>
            <button onClick={props.handleClick}>Enter</button>
        </div>
    );
}

export default Controller;