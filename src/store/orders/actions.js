// @flow
import type { Order } from 'entities';

export type CreateOrderAction = { type: "CREATE_ORDER", payload: Order }

export const createOrder = (order: Order): CreateOrderAction => ({
  type: 'CREATE_ORDER',
  payload: order,
});
export type Action =
  | CreateOrderAction
