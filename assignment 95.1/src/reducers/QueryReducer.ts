import type { AnyAction } from "redux-saga";
import { QUERY_CHANGE } from "../actions/QueryAction";
import { produce } from "immer";

export type State = {
    query: string;
};

export const initialState: State = {
    query: "",
};

function QueryReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case QUERY_CHANGE:
            return produce(state, (draft) => {
                draft.query = action.payload;
            });
        default:
            return state;
    }
}

export default QueryReducer;
