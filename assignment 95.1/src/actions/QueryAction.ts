import type { ActionCreator } from "./index";

export const QUERY_CHANGE = "QUERY_CHANGE";

export const QueryChangeAction: ActionCreator<string> = (query: string) => ({
    type: QUERY_CHANGE,
    payload: query
})