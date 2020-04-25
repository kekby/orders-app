// @flow
import type { Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import getCitiesSaga from './app/sagas/getCities';

export default function* root(): Saga<void> {
  yield fork(getCitiesSaga);
}
