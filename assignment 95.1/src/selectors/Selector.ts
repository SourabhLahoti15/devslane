import { createSelector } from "reselect";
import type { State } from "../store";

export const ShowsReducerSelector = (state: State) => state.ShowReducer;
export const ShowsMapSelector = createSelector(
    ShowsReducerSelector,
    (showsReducer) => showsReducer.shows
);

export const QueryReducerSelector = (state: State) => state.QueryReducer;
export const QuerySelector = createSelector(
    QueryReducerSelector,
    (queryReducer) => queryReducer.query
);

export const QueryShowsMapSelector = createSelector(
    ShowsReducerSelector,
    (showsReducer) => showsReducer.query_showids
);

export const ShowsSelector = createSelector(
    ShowsMapSelector,
    QuerySelector,
    QueryShowsMapSelector,
    (showsMap, query, queryShowsMap) =>
        queryShowsMap[query]?.map((showid) => showsMap[showid])
);

export const ShowidCastsSelector = createSelector(
    ShowsReducerSelector,
    (showsReducer) => showsReducer.showid_casts
);

export const LoadingSelector = (state: State) => state.LoadingReducer.loading;
