// import type { ActionCreator } from "redux";
import type { ActionCreator } from "./index";
import type { Show } from "../models/Show";

export const SHOWS_LOADED = "SHOWS_LOADED";

export const ShowsLoadedAction: ActionCreator<{ query: string; shows: Show[] }> = (query, shows: Show[]) => ({
    type: SHOWS_LOADED,
    payload: { query, shows },
});
