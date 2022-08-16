import React from 'react';
import './square.css';

const Square = (props) => {
    return (
        <div className='square' style={{ backgroundColor: props.color }}>
            {props.letter}
        </div>
    );
}

export default Square;