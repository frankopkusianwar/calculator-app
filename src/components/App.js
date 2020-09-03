import React from 'react';
import './App.css';
import calculateMethod from '../logic/calculate';
import Display from './Display';
import ButtonPannel from './ButtonPanel';

export default class App extends Component {
  constructor() {
    super();
  }
  // eslint-disable-next-line no-unused-vars
  render() {
    const { calculate } = calculateMethod;
    return (
      <div id="App">
        <Display />
        <ButtonPannel />
      </div>
    );
  }
}
