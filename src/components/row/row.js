import React from 'react';
import Square from '../square/square';
import './row.css';

const Row = (props) => {
    return (
        <div className='row'>
            <Square letter={props.guess[0]} color={props.colors[0]}/>
            <Square letter={props.guess[1]} color={props.colors[1]}/>
            <Square letter={props.guess[2]} color={props.colors[2]}/>
            <Square letter={props.guess[3]} color={props.colors[3]}/>
            <Square letter={props.guess[4]} color={props.colors[4]}/>
        </div>
    );
}

export default Row;