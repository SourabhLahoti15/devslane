import type { State } from "./Store";

export function happyCountSelector(state: State) {
    return state.HappyCount; 
}

export function sadCountSelector(state: State) {
    return state.SadCount; 
}
