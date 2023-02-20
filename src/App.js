import React, { useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import {
  numClickHandler,
  equalsClickHandler,
  clearClickHandler,
  flipSignClickHandler,
  mathOpClickHandler,
} from './functions';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const mathOperators = ['%', '/', 'X', '-', '+'];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0,
  })
  return (
    <div className="App">
      <Wrapper>
        <Screen value={calc.num}/>
        <ButtonBox >
          {
            btnValues.flat().map((btn, i) => (
              <Button
                className={btn === '=' ? 'equals' : ''}
                value={btn}
                onClick={(e) => {
                  console.log(`${btn} clicked`);
                  if (mathOperators.includes(btn)) mathOpClickHandler(e, calc, setCalc);
                  else if (nums.includes(btn)) numClickHandler(e, calc, setCalc);
                  else if (btn === '+-') flipSignClickHandler(calc, setCalc);
                  else if (btn === 'C') clearClickHandler(setCalc);
                  else if (btn === '=') equalsClickHandler(calc, setCalc);
                }}
              />
            ))
          }
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
