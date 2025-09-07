import type { AnyAction } from "redux";
import { produce } from "immer";
import { QUERY_CHANGE } from "../actions/QueryAction";
import { SHOWS_LOADED } from "../actions/ShowsAction";

export type State = {
  loading: boolean;
};

export const initialState: State = {
  loading: false,
};

function LoadingReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case QUERY_CHANGE:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        draft.loading = false;
      });
    default:
      return state;
  }
}

export default LoadingReducer;
