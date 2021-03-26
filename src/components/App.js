/* eslint-disable no-unused-vars, class-methods-use-this */
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
    const { total, next, operator } = this.state;
    console.log(total, next, operator);
    console.log(btnName);
  }

  render() {
    return (
      <div>
        <Display />
        <ButtonPanel clickHandler={() => this.handleClick} />
      </div>
    );
  }
}

export default App;

/* eslint-enable no-unused-vars, class-methods-use-this */
