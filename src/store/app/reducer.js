// @flow
import type { AppState } from 'entities';
import type { AppAction } from './actions';

const initialState = {
  cities: [],
  selectedCity: null,
};

export default (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case 'GET_CITIES_SUCCESS': {
      return {
        ...state,
        cities: action.payload,
      };
    }

    case 'GET_TIME_SLOTS': {
      return {
        ...state,
        selectedCity: action.payload,
      };
    }
    default:
      return state;
  }
};
