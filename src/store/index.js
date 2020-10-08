// CORE LIBS
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// REDUCER
import reducer from './reducer';

// STORE
const store = createStore(reducer, applyMiddleware(thunk));

// EXPORT
export default store;
