import { actionDefault } from "../types/actionDefaut.type";


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


export const userInfo = (state:userInfoInitType = userInfoInit, actions :actionDefault) => {
    switch (actions.type) {
        case 'ADD_INFO_USER_SESION': return actions.value;
        case 'ADD_INFO_TEL': return {...state, number_phone: actions.value};
        case 'ADD_INFO_FECHA': return {...state, feha_nac: actions.value};
        default: return state;
    }
}