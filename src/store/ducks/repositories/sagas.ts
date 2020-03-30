import { call, put } from "redux-saga/effects";
import api from "../../../service/api";

import { loadSuccess, loadFailure } from "./actions";

export function* load() {
  try {
    const response = yield call(api.get, "users/maxzanelato/repos");

    yield put(loadSuccess(response.data));
  } catch (e) {
    yield put(loadFailure());
  }
}
