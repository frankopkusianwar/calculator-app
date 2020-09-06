import React from 'react';
import './App.css';
import calculateMethod from '../logic/calculate';
import Display from './Display';
import ButtonPannel from './ButtonPanel';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { calculate } = calculateMethod;
    const { data } = this.state;
    const newData = calculate(data, buttonName);
    this.setState({
      data: newData,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div id="App">
        <Display calcResult={data.total || data.next || '0'} />
        <ButtonPannel handleClick={this.handleClick} />
      </div>
    );
  }
}
