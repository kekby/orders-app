// @flow
import type { AppState } from 'entities';
import type { AppAction } from './actions';

const initialState = {
  cities: [],
};

export default (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case 'GET_CITIES_SUCCESS': {
      return {
        ...state,
        cities: action.payload,
      };
    }
    default:
      return state;
  }
};
