

export type userInfoInitType = {
    access_menu: Object[]
    feha_nac: string
    number_phone: string
    puesto: string
    status: boolean
}

export const userInfoInit: userInfoInitType = {
    access_menu: [],
    feha_nac: '',
    number_phone: '',
    puesto: '',
    status:false
}


export const userInfo = (state = userInfoInit, actions :{type:string,value:any}) => {
    switch (actions.type) {
        case 'ADD_INFO_USER_SESION': return actions.value;
        case 'ADD_INFO_PUESTO': return {...state, puesto: actions.value};
        case 'ADD_INFO_FECHA': return {...state, feha_nac: actions.value};
        default: return state;
    }
}