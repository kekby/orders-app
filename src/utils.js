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

export const formatPrice = (price: number) => `${price.toLocaleString()} ₽`;
export const formatPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length !== 11) return '';
  const match = phoneNumber.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (!match) return '';
  return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
};
