import './App.css';
import GameBoard from './components/game-board/game-board';
import Controller from './components/controller/controller';
import { useState, useEffect } from 'react';
import { WORD_API_URL, wordApiOptions } from './api';

function App() {
  const [guesses, setGuesses] = useState([[], [], [], [], []]);
  const [colors, setColors] = useState([[], [], [], [], []]);
  const [inputValue, setInputValue] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('red');
  const [correctWord, setCorrectWord] = useState(null);
  const maxChars = 5;

  const handleInput = (e) => {
    if (attempt < maxChars) {
      let tempInput = e.target.value;
      if (tempInput.length > maxChars) {
        setInputValue(tempInput.substr(0, maxChars));
        tempInput = tempInput.substr(0, maxChars);
      } else {
        setInputValue(tempInput);
      }
  
      let tempLetters = [];
      tempLetters.length = maxChars;
      tempLetters.fill('');
      for (let i = 0; i < tempInput.length; i++) {
        tempLetters[i] = tempInput[i];
      }
  
      let tempGuesses = guesses;
      tempGuesses[attempt] = tempLetters;
      setGuesses(tempGuesses);
    }
  }

  const handleClick = () => {
    if (attempt < maxChars) {
      let letterNum = 0;
      for (let i = 0; i < guesses[attempt].length; i++) {
        if (guesses[attempt][i] !== '') {
          letterNum++;
        }
      }
      if (letterNum === maxChars) {
        let tempColors = [];
        let winCounter = 0;
        tempColors.length = maxChars;
        tempColors.fill('white');
        for (let i = 0; i < guesses[attempt].length; i++) {
          if (correctWord[i] === guesses[attempt][i]) {
            tempColors[i] = 'mediumseagreen';
            winCounter++;
          } else if (correctWord.includes(guesses[attempt][i])) {
            tempColors[i] = 'lightgoldenrodyellow	';
          } else {
            tempColors[i] = 'gainsboro';
          }
        }
        let finalColors = colors;
        finalColors[attempt] = tempColors;
        setColors(finalColors);
        if (winCounter === maxChars) {
          setMessageColor('green');
          setMessage("CONGRATS YOU'VE WON!!")
          setAttempt(5);
        } else {
          let tempAttempt = attempt + 1;
          if (tempAttempt >= maxChars) {
            setMessage("You've lost... but I'll let you try again :)");
          } else {
            setMessage('');
          }
          setAttempt(tempAttempt);
        }
        setInputValue('');
      } else {
        setMessage('Submit a 5 letter please!');
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  useEffect(() => {
    function handleData(response) {
      setCorrectWord(response[0]);
      console.log(response);
    }

    async function fetchWord() {
      return fetch(WORD_API_URL, wordApiOptions)
      .then(response => response.json())
      .then(response => handleData(response))
      .catch(err => console.error(err));
    }
    if (correctWord === null) {
      fetchWord();
    }
  },[correctWord]);

  return (
    <div className="App">
      <h1>WORDLE</h1>
      <GameBoard guesses={guesses} colors={colors}/>
      <Controller handleInput={handleInput} inputValue={inputValue} handleClick={handleClick} handleKeyDown={handleKeyDown}/>
      <p className='message' style={{ color: messageColor }}>{message}</p>
    </div>
  );
}

export default App;
