import { call, put } from "redux-saga/effects";
import { loadShowapi } from "../api";
import { ShowLoadedAction } from "../actions/ShowAction";

export function* fetchShow(action: any): Generator<any, any, any> {
    const show = yield call(loadShowapi, action.payload);
    yield put(ShowLoadedAction(show));
}