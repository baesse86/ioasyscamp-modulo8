import { call, put, takeEvery } from "redux-saga/effects";

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../slices/authSlice";

import api, { setAuthToken } from "../../services/api";

function* login({ payload: { formDados, callbackSuccess = () => {} } }) {
  try {
    const { data, headers } = yield call(api.post, "/auth/sign-in", formDados);

    const { authorization } = headers;

    setAuthToken(authorization);

    yield put(LOGIN_SUCCESS(data));
    callbackSuccess();
  } catch (error) {
    yield put(LOGIN_FAILURE(error));
  }
}

export default function* watcher() {
  yield takeEvery(LOGIN, login);
}
