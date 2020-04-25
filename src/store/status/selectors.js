// @flow

import type { State, Status } from 'types';

export const getCitiesStatusSelector = (state: State): Status => state.status.GET_CITIES;
export const getTimeSlotsStatusSelector = (state: State): Status => state.status.GET_TIME_SLOTS;
