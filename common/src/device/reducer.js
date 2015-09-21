import {Record} from 'immutable';

const InitialState = Record({
  isMobile: false
});
const initialState = new InitialState;

export default function deviceReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) state = initialState.merge(state);
  return state;
}
