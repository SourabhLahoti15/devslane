import { createStore, type Action } from "redux";

export type State = {
    HappyCount: number;
    SadCount: number;
};

const initialState = {
    HappyCount: 0,
    SadCount: 0
}

function reducer(currentState: State = initialState, action: Action): State {
    if (action.type === "happy button clicked") {
        return { ...currentState, HappyCount: currentState.HappyCount + 1 };
    } else if (action.type === "sad button clicked") {
        return { ...currentState, SadCount: currentState.SadCount + 1 };
    }
    return currentState;
}

const store = createStore(reducer);

export default store;