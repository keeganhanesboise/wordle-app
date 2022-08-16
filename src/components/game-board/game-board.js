import React from 'react';
import Row from '../row/row';
import './game-board.css';

const GameBoard = (props) => {
    return (
        <div className='gameBoard'>
            <Row guess={props.guesses[0]} colors={props.colors[0]}/>
            <Row guess={props.guesses[1]} colors={props.colors[1]}/>
            <Row guess={props.guesses[2]} colors={props.colors[2]}/>
            <Row guess={props.guesses[3]} colors={props.colors[3]}/>
            <Row guess={props.guesses[4]} colors={props.colors[4]}/>
        </div>
    );
}

export default GameBoard;