import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class Calculator extends React.Component {
  render() {
    return (
      <div className="container pt-20">
        <Display />
        <ButtonPanel />
      </div>
    );
  }

};

export default Calculator;
