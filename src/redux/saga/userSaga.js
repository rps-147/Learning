import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import { Navigate } from "react-router-dom";

import * as type from "../types";
import Api from "../../api/index";

function* registerSaga(action) {
  // console.log("Response....", action.payload);
  try {
    const response = yield call(Api.signup, action.payload);

    if (response.status == "200") {
      yield put({ type: type.REGISTER_SUCCESS, users: response.data });
    } else {
      yield put({
        type: type.REGISTER_FAILURE,
        Error: { msg: "Invalid Password", status: response.status },
      });
    }
  } catch (e) {
    console.log("Api not called....", e);
    yield put({
      type: type.REGISTER_FAILURE,
      Error: { msg: e.message, status: e.response?.status || 500 },
    });
  }
}

function* loginSaga(action) {
  try {
    const response = yield call(Api.login, action.payload);
    console.log("Data....", response.data);
    if (response.status == "200") {
      localStorage.setItem("token", response.data.user.token);
      localStorage.setItem("Role", response.data.user.Role);
      localStorage.setItem("users", JSON.stringify(response.data.user));
      localStorage.setItem("Response", JSON.stringify(response.data));
      yield put({ type: type.LOGIN_SUCCESS, users: response.data });
    } else {
      yield put({
        type: type.LOGIN_FAILURE,
        Error: { msg: "Invalid Password", status: response.status },
      });
    }
  } catch (e) {
    yield put({
      type: type.LOGIN_FAILURE,
      Error: { msg: e.message, status: e.response?.status || 500 },
    });
  }
}
function* hideRegisterModal(action) {
  console.log("From Saga....");
  try {
    yield put({ type: type.HIDE_MODAL, data: "dsdsghdgs" });
  } catch (err) {
    console.log("Error......", err);
  }
}

function* userSaga() {
  yield takeEvery(type.LOGIN_REQUESTING, loginSaga);
  yield takeEvery(type.REGISTER_REQUESTING, registerSaga);
  // yield takeLatest(type.HIDE_MODAL, hideRegisterModal);
}

export default userSaga;
