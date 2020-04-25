// @flow
import type { Order } from 'types';

export type CreateOrderAction = { type: "CREATE_ORDER", payload: Order }

export const createOrder = (order: Order): CreateOrderAction => ({
  type: 'CREATE_ORDER',
  payload: order,
});
export type Action =
  | CreateOrderAction
