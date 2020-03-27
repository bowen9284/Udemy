import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions';

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={this.props.onIncrementByCounter}
        />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onDecrementByCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
        <ul>
          {this.props.storedResults.map(result => (
            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actions.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actions.DECREMENT }),
    onIncrementByCounter: () => dispatch({ type: actions.INCREMENT_BY, value: 5 }),
    onDecrementByCounter: () => dispatch({ type: actions.DECREMENT_BY, value: 5 }),
    onStoreResult: (result) => dispatch({ type: actions.STORE_RESULT, result: result }),
    onDeleteResult: (id) => dispatch({ type: actions.DELETE_RESULT, resultId: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
