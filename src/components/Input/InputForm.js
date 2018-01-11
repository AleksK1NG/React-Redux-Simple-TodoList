import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../../actions";
import styled from 'styled-components';
import { Li, Ul } from './InputFormStyle';

const InputForm = styled.div`
  color: lightblue;
`;
const Button = styled.button`
    background: 0 0;
    border: none;
    border-radius: 2px;
    color: #757575;
    position: relative;
    height: 36px;
    margin: 0;
    min-width: 64px;
    padding: 0 16px;
    display: inline-block;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0;
    overflow: hidden;
    will-change: box-shadow;
    transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);
    outline: none;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    line-height: 36px;
    vertical-align: middle;
    &:hover {
    background-color: rgba(158,158,158,.2);
    }
`;


class inputForm extends Component {


  render() {
    return (
      <InputForm>
        <h1>Input Form Component</h1>
        <h2>{this.props.counter}</h2>
        <hr/>
        <input
          type="text"
          value={this.props.inputValue}
          onChange={(event) => this.props.inputChange(event.target.value)}
          />
        <hr/>
        <h3>Input value: {this.props.inputValue}</h3>
        <hr/>
        <Button onClick={() => this.props.addTask()} >Add Task</Button>
        <hr/>
         <Ul>
           {this.props.inputResults.map(result => {
             return <Li
                     key={result.id}
                     >{result.value}
                     <Button
                        onClick={() => this.props.deleteTask(result.id)}
                        >Delete
                     </Button>
                    </Li>
           })}
         </Ul>
      </InputForm>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    name: state.counter.name,
    storeResult: state.result.storeResult,
    inputValue: state.counter.inputValue,
    inputResults: state.counter.inputResults,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputChange: (payload) => dispatch(actionCreators.inputChange(payload)),
    addTask: () => dispatch(actionCreators.addTask()),
    deleteTask: (payload) => dispatch(actionCreators.deleteTask(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(inputForm);