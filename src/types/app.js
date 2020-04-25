// @flow

export type City = {
  "id": string,
  "name": string,
  "address": string,
  "phones": string[],
  "price": number
}

export type TimeSlot = {
  day: string,
  begin: string,
  end: string,
  date: string,
  is_not_free: boolean
}

export type TimeSlotsRes = {
  [string]: {
    [string]: TimeSlot
  }
}
