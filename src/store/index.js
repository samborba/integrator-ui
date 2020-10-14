import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import integrationReducer from './integration/reducer';
import integrationsReducer from './integrations/reducer';

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const reducers = combineReducers({
    integrationReducer,
    integrationsReducer
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;