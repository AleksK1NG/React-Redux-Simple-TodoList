import * as actionsTypes from './actionsTypes'; 

export const saveResult = (payload) => {
  return {
    type:actionsTypes.STORE_RESULT,
    payload: payload
  }
};

export const storeResult = (payload) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(payload));
    }, 2000);
  }
};

export const deleteResult = (payload) => {
  return {
    type: actionsTypes.DELETE_RESULT,
    payload: payload
  }
};

