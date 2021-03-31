/* eslint-disable react/no-unused-state */
import './App.css';
import React, { useState } from 'react';
import Display from './Display/Display';
import ButtonPanel from './ButtonPanel/ButtonPanel';
import calculate from '../logic/calculate';
import Navbar from './Navbar';

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operator: null });

  const handleClick = btnName => {
    setState(state => calculate(state, btnName));
  };

  const { total, next } = state;
  return (
    <main>
      <Navbar />
      <div className="container">
        <h3>Let’s do some math!</h3>
        <div className="calculator">
          <Display onInput={next !== null ? next : total} />
          <ButtonPanel clickHandler={() => handleClick} />
        </div>
      </div>
    </main>
  );
};

export default App;

/* eslint-enable react/no-unused-state */
