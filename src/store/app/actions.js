// @flow
export type GetCitiesAction = { type: "GET_CITIES" }

export const getCities = (): GetCitiesAction => ({
  type: 'GET_CITIES',
});

export type Action =
  | GetCitiesAction
