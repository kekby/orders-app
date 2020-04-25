// @flow
import type { AppState } from 'entities';
import type { Action } from './actions';

const initialState = {
  cities: [],
};

export default (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {
    default:
      return state;
  }
};
