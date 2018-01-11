import * as actionsTypes from './actionsTypes'; 

export const increment = () => {
  return {
    type: actionsTypes.INC_COUNTER,
  }
};

export const decrement = () => {
  return {
    type: actionsTypes.SUB_COUNTER,
  }
};

export const plusCounter = (payload) => {
  return {
    type:actionsTypes.PLUS_COUNTER,
    payload: payload
  }
};

export const minusCounter = (payload) => {
  return {
    type: actionsTypes.MINUS_COUNTER,
    payload: payload
  };
};

export const inputChange = (payload) => {
  return {
    type: actionsTypes.INPUT_CHANGE,
    payload: payload,
  };
};

export const addTask = () => {
  return {
    type: actionsTypes.ADD_TASK,
  }
};

export const deleteTask = (payload) => {
  return {
    type: actionsTypes.DELETE_TASK,
    payload,
  }
};
