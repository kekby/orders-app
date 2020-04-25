/* eslint-disable import/prefer-default-export */
// @flow
import type { State } from 'entities';
import type { Option } from 'components/Select';

export const citiesOptionsSelector = (state: State): Option[] => state.app.cities.map((c) => ({
  label: c.name,
  value: c.id,
}));

export const citySelector = (state: State): string => state.app.selectedCity || '';
