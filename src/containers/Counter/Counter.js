import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators  from '../../actions/index';
import InputForm from '../../components/Input/InputForm';
import { Button } from '../../components/UI/Buttonstyle';

class Counter extends Component {
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.INC_COUNTER} />
                <CounterControl label="Decrement" clicked={this.props.SUB_COUNTER}  />
                <CounterControl label="Add 5" clicked={() => this.props.PLUS_COUNTER(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.MINUS_COUNTER({counter: 5, name: 'Miracle'})}  />
                <h1>{this.props.counter}</h1>
                <h2>{this.props.name}</h2>
                <hr/>
                <br/>
                <Button onClick={() => this.props.STORE_RESULT(this.props.counter)} >Store result</Button>
                <ul>
                {this.props.storeResult.map(result => {
                  return <li onClick={() => this.props.DELETE_RESULT(result.id)} 
                  key={result.id}>{result.value}</li>
                })}
                  <h1>{this.props.storeResult.id}</h1>
                </ul>
              <hr/>
              <InputForm counter={this.props.counter}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    name: state.counter.name,
    storeResult: state.result.storeResult
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    INC_COUNTER: () => dispatch(actionCreators.increment()),
    SUB_COUNTER: () => dispatch(actionCreators.decrement()),
    PLUS_COUNTER: (payload) => dispatch(actionCreators.plusCounter(payload)),
    MINUS_COUNTER: (payload) => dispatch(actionCreators.minusCounter(payload)),
    STORE_RESULT: (payload) => dispatch(actionCreators.storeResult(payload)),
    DELETE_RESULT: (payload) => dispatch(actionCreators.deleteResult(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);