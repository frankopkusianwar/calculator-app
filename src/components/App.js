import React from 'react';
import './App.css';
import calculateMethod from '../logic/calculate';
import Display from './Display';
import ButtonPannel from './ButtonPanel';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
    };
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
    return (
      <div id="App">
        <Display />
        <ButtonPannel />
      </div>
    );
  }
}
