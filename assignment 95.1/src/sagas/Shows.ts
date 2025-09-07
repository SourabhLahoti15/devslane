import { call, put } from "redux-saga/effects";
import { searchShowsapi } from "../api";
import { ShowsLoadedAction } from "../actions/ShowsAction";

export function* fetchShows(action: any): Generator<any, any, any> {
    const query = action.payload;
    const shows = yield call(searchShowsapi, action.payload);
    yield put(ShowsLoadedAction(query, shows));
}

