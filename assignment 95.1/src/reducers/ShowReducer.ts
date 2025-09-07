import type { AnyAction } from "redux";
import type { Show } from "../models/Show";
import { SHOWS_LOADED } from "../actions/ShowsAction";
import { produce } from "immer";
import { normalize, schema } from "normalizr";
import { SHOW_LOADED } from "../actions/ShowAction";

export type State = {
    shows: { [showId: number]: Show };
    query_showids: { [query: string]: number[] };
    loading: boolean
    show_loading: {[showid: number]: boolean}
};

export const initialState: State = {
    shows: {},
    query_showids: {},
    loading: false,
    show_loading: {}
};

function ShowReducer(state = initialState, action: AnyAction): State {
    switch (action.type) {
        case SHOWS_LOADED:
            return produce(state, (draft) => {
                const { query, shows }: { query: string; shows: Show[] } = action.payload;
                const showSchema = new schema.Entity("shows");
                const normalizedData = normalize(shows, [showSchema]);
                if (normalizedData.entities.shows) {
                    draft.shows = {
                        ...draft.shows,
                        ...normalizedData.entities.shows,
                    };
                }
                draft.query_showids[query] = normalizedData.result;
            });
        case SHOW_LOADED:
            return produce(state, (draft) => {
                const show: Show = action.payload;
                draft.shows[show.id] = show;
            });
        default:
            return state;
    }
}

export default ShowReducer;
