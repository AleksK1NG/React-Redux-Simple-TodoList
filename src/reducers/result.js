import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  storeResult: [],
  fetchResults: []
};

const result = (state = initialState, action) => {
  switch(action.type){
      case actionTypes.STORE_RESULT:
        return {
          ...state,
          storeResult: state.storeResult.concat({id: new Date(), value: action.payload}),
        };
      case actionTypes.DELETE_RESULT:
        const updatedStoreResult = state.storeResult.filter(result => {
          return result.id !== action.payload
        });
        return {
          ...state,
          storeResult: updatedStoreResult
        };

    default:
      return state;
  }
};

export default result; 