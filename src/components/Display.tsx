import { connect } from 'react-redux';
import React from 'react';
import { DataType } from '../reducers';

type PropsType =
  {
    state: DataType,
    dispatch: any
  };

class Display extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }
  render() {
    return (
      <div className="display">
        {this.props.state.displayedValue}
      </div>
    );
  }
};


const mapStateToProps = (state: { buttonReducer: DataType }) => {
  return {
    state: state.buttonReducer
  }
};
export default connect(mapStateToProps)(Display);
