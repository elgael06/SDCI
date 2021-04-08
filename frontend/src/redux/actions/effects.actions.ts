import { messageInitial } from "../reducers/effects";

export const loaddingOn = () => {
    return (dispatch:Function) => {
        dispatch({ type: 'ON_LOADDING' });
    }
}
export const loaddingOff = () => {
    return (dispatch:Function) => {
        dispatch({ type: 'OFF_LOADDING' });
    }
}

export const menssageOn = (message:messageInitial) => {
    return (dispatch:Function) => {
        dispatch({ type: 'ON_MESSAGE',value:message });
    }
}
export const menssageOff = () => {
    return (dispatch:Function) => {
        dispatch({ type: 'OFF_MESSAGE' });
    }
}

export const toaskOn = (message:messageInitial) => {
    return (dispatch:Function) => {
        dispatch({ type: 'ON_TOASK',value:message });
    }
}
export const toaskOff = () => {
    return (dispatch:Function) => {
        dispatch({ type: 'OFF_TOASK' });
    }
}