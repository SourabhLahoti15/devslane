import { call, put } from "redux-saga/effects";
import { searchShowsapi } from "../api";
import { ShowsLoadedAction } from "../actions/ShowsAction";

export function* fetchShows(action: any): Generator<any, any, any> {
    const query = action.payload;
    const showCastsArr = yield call(searchShowsapi, action.payload);
    const shows = showCastsArr.map((item: any) => item.show);
    // const casts = showCastsArr.map((item: any) => {item.casts});
    yield put(ShowsLoadedAction(query, shows));
}