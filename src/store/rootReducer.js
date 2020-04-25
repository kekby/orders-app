import { combineReducers } from 'redux';

import orderReducer from './orders/reducer';
import appReducer from './app/reducer';
import statusReducer from './status/reducer';

export default () => combineReducers({
  orders: orderReducer,
  app: appReducer,
  status: statusReducer,
});
