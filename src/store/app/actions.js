// @flow
import type { City } from 'entities';

export type GetCitiesAction = { type: "GET_CITIES" }
export type GetCitiesSuccessAction = { type: "GET_CITIES_SUCCESS", payload: City[] }

export const getCities = (): GetCitiesAction => ({
  type: 'GET_CITIES',
});
export type AppAction =
  | GetCitiesAction
  | GetCitiesSuccessAction
