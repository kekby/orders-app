// @flow
import {
  takeLatest, put, call,
} from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import type { City } from 'entities';
import assign from 'store/status/assignStatus';
import type { GetTimeSlotsAction } from 'store/app/actions';
import api from 'api';

type Res = {
  cities: City[]
}

function* getTimeSlotsSaga({ type, payload }: GetTimeSlotsAction): Saga<void> {
  try {
    yield put(assign.request(type));
    const result: Res = yield call(api.getTimeSlots, payload);
    yield put(assign.success(type, result.cities));
  } catch (e) {
    yield put(assign.failure(type, e.message));
  }
}

export default function* listener(): Saga<void> {
  yield takeLatest('GET_TIME_SLOTS', getTimeSlotsSaga);
}
