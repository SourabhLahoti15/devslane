// import type { ActionCreator } from "redux";
import type { ActionCreator } from "./index";
import { type Show } from "../models/Show";

export const SHOW_LOADED = "SHOW_LOADED";

export const ShowLoadedAction: ActionCreator<Show> = (show: Show) => ({
    type: SHOW_LOADED,
    payload: show,
});

export const LOAD_SHOW = "LOAD_SHOW"

export const LoadShowAction: ActionCreator<number> = (showid: number) => ({
    type: LOAD_SHOW,
    payload: showid
})