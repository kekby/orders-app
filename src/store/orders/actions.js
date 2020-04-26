// @flow
import type { Order } from 'types';

export type CreateOrderAction = { type: "CREATE_ORDER", payload: Order }
export type DeleteOrderAction = { type: "DELETE_ORDER", payload: string }


export const createOrder = (order: Order): CreateOrderAction => ({
  type: 'CREATE_ORDER',
  payload: order,
});

export const deleteOrder = (id: string): DeleteOrderAction => ({
  type: 'DELETE_ORDER',
  payload: id,
});

export type Action =
  | CreateOrderAction
  | DeleteOrderAction
