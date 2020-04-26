/* eslint-disable import/prefer-default-export */
// @flow

import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

const capitalize = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};

export const formatDay = (day: string) => {
  const formatted = format(parse(day, 'y-MM-dd', new Date()), 'iiii, d MMMM', { locale: ru });
  return capitalize(formatted);
};
