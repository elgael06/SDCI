
export type messageInitial = {
    title: string,
    text: string,
    status: boolean,
    type:'danger'| 'info'
}

export type efectaInitial = {
    loadding: boolean,
    message: messageInitial,
    toask: messageInitial,
    statusModal:boolean,
    
}

export const efectsInitialState: efectaInitial = {
    loadding: false,
    message: {
        status: false,
        text: '',
        title: '',
        type:'info'
    },
    toask: {
        status: false,
        text: '',
        title: '',
        type:'info'
    },
    statusModal:false,
}
export type efActions = {
    type: string,
    value:any
}

export const effects = (state=efectsInitialState,actions:efActions) => {
    
    switch (actions.type) {
        case 'ON_LOADDING':
            return { ...state, loadding: true };
        case 'OFF_LOADDING':
            return { ...state, loadding: false };
        case 'ON_MESSAGE':
            return { ...state, message: actions.value };
        case 'OFF_MESSAGE':
            return { ...state, message: efectsInitialState.message };
        case 'ON_TOASK':
            return { ...state, toask: actions.value };
        case 'OFF_TOASK':
            return { ...state, toask: actions.value };
        case 'ON_MODAL':
            return { ...state, statusModal: true };
        case 'OFF_MODAL':
            return { ...state, statusModal: false };
        default:
            return state;
    }
}


