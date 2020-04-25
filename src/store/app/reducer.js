// @flow
import type { AppState } from 'types';
import type { AppAction } from './actions';

const initialState = {
  cities: [],
  slots: null,
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

    case 'GET_TIME_SLOTS_SUCCESS': {
      return {
        ...state,
        slots: action.payload,
      };
    }
    default:
      return state;
  }
};
