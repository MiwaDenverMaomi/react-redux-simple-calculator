import { connect } from 'react-redux';
import React from 'react';
import { getButtonValue } from '../actions';
import { DataType } from '../reducers';
import { store } from '../store';
import { produceWithPatches } from 'immer';

type PropsType =
  {
    state: DataType,
    dispatch: any
  };

class ButtonPanel extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  render() {
    return (
      <div className="btn-container">
        <div className="row-4">
          <button type="button" className="btn" onClick={() => getButtonValue("7")}>7</button>
          <button type="button" className="btn" onClick={() => getButtonValue("8")}>8</button>
          <button type="button" className="btn" onClick={() => getButtonValue("9")}>9</button>
          <button type="button" className="btn modifier" onClick={() => getButtonValue("AC")}>AC</button>
          <button type="button" className="btn" onClick={() => getButtonValue("4")}>4</button>
          <button type="button" className="btn" onClick={() => getButtonValue("5")}>5</button>
          <button type="button" className="btn" onClick={() => getButtonValue("6")}>6</button>
          <button type="button" className="btn operand" onClick={() => getButtonValue("+")}>+</button>
          <button type="button" className="btn" onClick={() => getButtonValue("1")}>1</button>
          <button type="button" className="btn" onClick={() => getButtonValue("2")}>2</button>
          <button type="button" className="btn" onClick={() => getButtonValue("3")}>3</button>
          <button type="button" className="btn operand" onClick={() => getButtonValue("-")}>-</button>
          <button type="button" className="btn" onClick={() => getButtonValue("0")}>0</button>
          <button type="button" className="btn" onClick={() => getButtonValue(".")}>.</button>
          <button type="button" className="btn operand" onClick={() => getButtonValue("×")}>×</button>
          <button type="button" className="btn operand" onClick={() => getButtonValue("÷")}>÷</button>
        </div>
        <div className="row-2">
          <button type="button" className="btn modifier" onClick={() => getButtonValue("Del")}>Del</button>
          <button type="button" className="btn operand" onClick={() => getButtonValue("=")}>=</button>
        </div>
      </div>
    );
  }
};


const mapStateToProps = (state: { buttonReducer: DataType }) => {
  return {
    state: state.buttonReducer
  }

};
export default connect(mapStateToProps)(ButtonPanel);
