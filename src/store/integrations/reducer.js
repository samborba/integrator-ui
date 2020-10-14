import actionTypes from './actionTypes';

const initialState = {
  integrations: [],
};

/**
 * Integrations reducer
 *
 * @param state
 * @param action
 */
const integrationsReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case actionTypes.GET_INTEGRATIONS_SUCCESS:
      return { ...state, integrations: [...action.integrations] };

    case actionTypes.GET_INTEGRATIONS_FAIL:
      return { ...state };

    default:
      return state;
  }
};

export default integrationsReducer;