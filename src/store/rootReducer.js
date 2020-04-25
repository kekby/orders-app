import { combineReducers } from 'redux';

import orderReducer from './orders/reducer';

export default () => combineReducers({
  orders: orderReducer,
});
