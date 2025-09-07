import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { debounce, takeEvery } from "redux-saga/effects";
import { QUERY_CHANGE } from "./actions/QueryAction";
import { fetchShows } from "./sagas/Shows";
import { LOAD_SHOW } from "./actions/ShowAction";
import { fetchShow } from "./sagas/Show";
import ShowReducer from "./reducers/ShowReducer";
import QueryReducer from "./reducers/QueryReducer";
import LoadingReducer from "./reducers/LoadingReducer";

const reducer = combineReducers({
    ShowReducer,
    QueryReducer,
    LoadingReducer
});

function* rootSaga() {
    // yield takeLatest(QUERY_CHANGE, fetchShows);
    yield debounce(100, QUERY_CHANGE, fetchShows);
    yield takeEvery(LOAD_SHOW, fetchShow)
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export type State = ReturnType<typeof reducer>;

export default store;
