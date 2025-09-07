export type Action<T> = {
    type: string;
    payload?: T
};

export type ActionCreator<T> = (...args: any) => ({
    type: string;
    payload: T
})