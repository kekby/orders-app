// @flow
import type { Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import getCitiesSaga from './app/sagas/getCities';
import getTimeSlotsSaga from './app/sagas/getTimeSlots';

export default function* root(): Saga<void> {
  yield fork(getCitiesSaga);
  yield fork(getTimeSlotsSaga);
}
