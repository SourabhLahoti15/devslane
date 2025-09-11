// import type { ActionCreator } from "redux";
import type { ActionCreator } from "./index";
import { type Show } from "../models/Show";

export const SHOW_LOADED = "SHOW_LOADED";

export const ShowLoadedAction: ActionCreator<{show: Show, casts: []}> = (show: Show, casts: []) => ({
    type: SHOW_LOADED,
    payload: {show, casts},
});

export const LOAD_SHOW = "LOAD_SHOW";

export const LoadShowAction: ActionCreator<number> = (showid: number) => ({
    type: LOAD_SHOW,
    payload: showid
})