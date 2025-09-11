import { call, put } from "redux-saga/effects";
import { loadShowapi, searchShowsapi } from "../api";
import { ShowLoadedAction } from "../actions/ShowAction";

export function* fetchShow(action: any): Generator<any, any, any> {
    const show = yield call(loadShowapi, action.payload);
    const showCastsArr = yield call(searchShowsapi, action.payload);
    const casts = showCastsArr.map((item: any) => item.casts);
    yield put(ShowLoadedAction(show, casts));
}