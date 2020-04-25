// @flow
import {
  takeLatest, put, call,
} from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import type { City } from 'types';
import assign from 'store/status/assignStatus';
import { type GetCitiesAction, getTimeSlots } from 'store/app/actions';
import api from 'api';

type Res = {
  cities: City[]
}

function* getCitiesSaga({ type }: GetCitiesAction): Saga<void> {
  try {
    yield put(assign.request(type));
    const result: Res = yield call(api.getCities);
    yield put(assign.success(type, result.cities));
    if (result.cities.length > 0) {
      yield put(getTimeSlots(result.cities[0].id));
    }
  } catch (e) {
    yield put(assign.failure(type, e.message));
  }
}

export default function* listener(): Saga<void> {
  yield takeLatest('GET_CITIES', getCitiesSaga);
}
