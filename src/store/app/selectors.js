/* eslint-disable import/prefer-default-export */
// @flow
import type { State, TimeSlotsRes, City } from 'types';
import { createSelector } from 'reselect';
import type { Option } from 'components/Select';
import { formatDay } from 'utils';

export const slotsSelector = (state: State) => state.app.slots || {};
export const selectedDaySelector = (state: State) => state.app.selectedDay;
export const citiesSelector = (state: State) => state.app.cities;
export const citiesOptionsSelector = (state: State): Option[] => state.app.cities.map((c) => ({
  label: c.name,
  value: c.id,
}));

export const cityIdSelector = (state: State): string => state.app.selectedCity || '';
export const citySelector = createSelector<State, *, ?City, City[], string>(
  citiesSelector,
  cityIdSelector,
  (cities, cityId) => {
    return cities.find((city) => city.id === cityId);
  },
);
export const dayOptionsSelector = createSelector<State, *, Option[], TimeSlotsRes>(
  slotsSelector,
  (slots) => {
    const days = Object.keys(slots);
    return days
      .filter((day) => {
        const timeSlots = slots[day];
        return Object.keys(timeSlots).find((t) => !timeSlots[t].is_not_free);
      })
      .map((day) => ({
        label: formatDay(day),
        value: day,
      }));
  },
);

export const timeOptionsSelector = createSelector<State, *, Option[], TimeSlotsRes, ?string>(
  slotsSelector,
  selectedDaySelector,
  (slots, day) => {
    if (!day || !slots[day]) return [];
    const timeSlots = slots[day];
    return Object.keys(timeSlots)
      .filter((k) => !timeSlots[k].is_not_free)
      .map((t) => ({
        label: timeSlots[t].begin,
        value: timeSlots[t].date,
      }));
  },
);
