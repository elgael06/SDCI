import { userInitial } from "./usuarios";

export const usuarioSelInit: userInitial = {
    id: '',
    name: '',
    lastName: '',
    email: '',
    create: '',
    puesto:''
}
export type selectedAction = {
    type: string,
    value:any
}

export const usurioSeleccionado = (state=usuarioSelInit, actions:selectedAction):userInitial => {
    
    switch (actions.type) {
        case 'SELECTED_USER_ID':
            return actions.value;
        case 'DEFAULT_USER_ID':
            return usuarioSelInit;
        case 'USER_NAME':
            return { ...state, name: actions.value };
        case 'USER_LAST_NAME':
            return { ...state, lastName: actions.value };
        case 'USER_EMAIL':
            return { ...state, email: actions.value };
        case 'USER_PUESTO':
            return { ...state, puesto: actions.value };
        default:
            return state;
    }

}