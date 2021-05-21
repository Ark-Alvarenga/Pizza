import { createStore } from 'redux';
import orderState from './reducer';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(orderState, composeWithDevTools());

export default store;