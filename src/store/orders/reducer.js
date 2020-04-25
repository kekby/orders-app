// @flow
import type { OrderState } from 'entities';
import type { Action } from './actions';

const initialState = {
  list: [],
};

export default (state: OrderState = initialState, action: Action): OrderState => {
  switch (action.type) {
    default:
      return state;
  }
};
