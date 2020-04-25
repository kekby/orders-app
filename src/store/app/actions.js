// @flow
import type { City } from 'entities';

export type GetCitiesAction = { type: "GET_CITIES" }
export type GetCitiesSuccessAction = { type: "GET_CITIES_SUCCESS", payload: City[] }
export type GetTimeSlotsAction = { type: "GET_TIME_SLOTS", payload: string }
export const getCities = (): GetCitiesAction => ({
  type: 'GET_CITIES',
});

export const getTimeSlots = (id: string): GetTimeSlotsAction => ({
  type: 'GET_TIME_SLOTS',
  payload: id,
});
export type AppAction =
  | GetCitiesAction
  | GetCitiesSuccessAction
  | GetTimeSlotsAction
