/* eslint-disable react/no-unused-state */
import './App.css';
import React from 'react';
import Display from './Display/Display';
import ButtonPanel from './ButtonPanel/ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operator: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    this.setState(state => calculate(state, btnName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div>
        <Display onInput={next !== null ? next : total} />
        <ButtonPanel clickHandler={() => this.handleClick} />
      </div>
    );
  }
}

export default App;

/* eslint-enable react/no-unused-state */
