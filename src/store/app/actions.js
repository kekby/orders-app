// @flow
import type { City, TimeSlotsRes } from 'types';

export type GetCitiesAction = { type: "GET_CITIES" }
export type GetCitiesSuccessAction = { type: "GET_CITIES_SUCCESS", payload: City[] }
export type GetTimeSlotsAction = { type: "GET_TIME_SLOTS", payload: string }
export type GetTimeSlotsSuccessAction = { type: "GET_TIME_SLOTS_SUCCESS", payload: TimeSlotsRes }
export type SelectDayAction = { type: "SELECT_DAY", payload: string }

export const getCities = (): GetCitiesAction => ({
  type: 'GET_CITIES',
});

export const getTimeSlots = (id: string): GetTimeSlotsAction => ({
  type: 'GET_TIME_SLOTS',
  payload: id,
});

export const selectDay = (day: string): SelectDayAction => ({
  type: 'SELECT_DAY',
  payload: day,
});

export type AppAction =
  | GetCitiesAction
  | GetCitiesSuccessAction
  | GetTimeSlotsAction
  | GetTimeSlotsSuccessAction
  | SelectDayAction
