import { combineReducers } from 'redux';
import counter from './counter';
import result from './result';
import todo from './todo';

export default combineReducers({
  counter,
  result,
  todo,
});