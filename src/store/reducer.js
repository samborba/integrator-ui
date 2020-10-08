// ACTION TYPES
import actionTypes from './actionTypes';

// INITIAL STATE
const initialState = {
};

/**
 * reducer
 *
 * @param state
 * @param action
 */
const reducer = (state = initialState, action = undefined) => {
  switch (action.type) {

    // DEFAULT
    default:
      return state;
  }
}

// EXPORT
export default reducer;
