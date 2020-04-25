// @flow
import type { Order } from './order';
import type { City } from './app';

export type Status = "REQUEST" | "SUCCESS" | "FAILURE" | "INIT"

export type OrderState = {
  list: Order[]
}

export type StatusState = {|
  GET_CITIES: Status,
  GET_TIME_SLOTS: Status
|}

export type AppState = {|
  cities: City[],
  selectedCity: ?string
|}

export type State = {
  orders: OrderState,
  status: StatusState,
  app: AppState
}
