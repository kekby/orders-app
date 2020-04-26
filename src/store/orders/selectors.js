/* eslint-disable import/prefer-default-export */
// @flow
import type { State } from 'types';

export const ordersSelector = (state: State) => state.orders.list;
