// @flow
import type { StatusState } from 'types';
import type { Action } from './action';

const initialState = {
  GET_CITIES: 'INIT',
  GET_TIME_SLOTS: 'INIT',
};

export default (state: StatusState = initialState, action: Action): StatusState => {
  const { type } = action;

  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState,
  };
};
