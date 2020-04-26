// @flow
import type { OrderState } from 'types';
import type { Action } from './actions';

const initialState = {
  list: [],
};

export default (state: OrderState = initialState, action: Action): OrderState => {
  switch (action.type) {
    case 'CREATE_ORDER': {
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    }

    default:
      return state;
  }
};
