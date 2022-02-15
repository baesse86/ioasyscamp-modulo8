import { call, put, takeEvery } from "redux-saga/effects";

import {
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
} from "../slices/booksSlices";

import api from "../../services/api";

function* getBooks({ payload: { page } }) {
  try {
    const {
      data: { data, totalPages },
    } = yield call(api.get, `books?page=${page}&amount=12`);

    yield put(GET_BOOKS_SUCCESS({ data, totalPages }));
  } catch (error) {
    yield put(GET_BOOKS_FAILURE(error));
  }
}

export default function* watcher() {
  yield takeEvery(GET_BOOKS, getBooks);
}
