/* eslint-disable import/prefer-default-export */
// @flow
import type { State, TimeSlotsRes } from 'types';
import { createSelector } from 'reselect';
import type { Option } from 'components/Select';
import { formatDay } from 'utils';

export const slotsSelector = (state: State) => state.app.slots || {};
export const citiesOptionsSelector = (state: State): Option[] => state.app.cities.map((c) => ({
  label: c.name,
  value: c.id,
}));

export const citySelector = (state: State): string => state.app.selectedCity || '';

export const daysSelector = createSelector<State, *, Option[], TimeSlotsRes>(
  slotsSelector,
  (slots) => {
    const days = Object.keys(slots);
    return days.map((day) => ({
      label: formatDay(day),
      value: day,
    }));
  },
);
