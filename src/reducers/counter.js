import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  name: 'React-Redux-Styled-Components',
  counter: 0,
  inputValue: '',
  inputResults: []
};

const counter = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.INC_COUNTER:
      return {
        ...state,
        counter: state.counter += 1,
      };
    case actionTypes.SUB_COUNTER:
      return {
        ...state,
        counter: state.counter -= 1,
      };
    case actionTypes.PLUS_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload,
        name: action.name,
      };
    case actionTypes.MINUS_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload.counter,
        name: action.payload.name,
      };
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.payload
      };
    case actionTypes.ADD_TASK:
      console.log(state.inputResults);
      return {
        ...state,
        inputResults: state.inputResults.concat({id: new Date(), value: state.inputValue})
      };
    case actionTypes.DELETE_TASK:
      console.log(state.inputResults);
      return {
        ...state,
        inputResults: state.inputResults.filter(item => {
          return item.id !== action.payload;
        })
      };
    default:
      return state;
  }
};

export default counter; 