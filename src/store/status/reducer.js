// @flow
import type { StatusState } from 'entities';
import type { Action } from './action';

const initialState = {
  GET_CITIES: 'INIT',
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
