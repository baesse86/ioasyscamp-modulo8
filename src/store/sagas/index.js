import { all } from "redux-saga/effects";

import authSaga from "./authSaga";
import booksSaga from "./booksSaga";

function* rootSaga() {
  yield all([authSaga(), booksSaga()]);
}

export default rootSaga;
