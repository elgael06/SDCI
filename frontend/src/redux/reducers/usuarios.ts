import { actionDefault } from "../types/actionDefaut.type";

export type userInitial = {
    id:string,
    create: string,
    email: string,
    name: string,
    lastName: string,
    puesto?:string,
}


export const usuarios = (state: userInitial[] = [], action: actionDefault) => {
    switch (action.type) {
        case 'LISTA_USUARIOS':
            return action.value;
        case 'REMOVE_USUARIOS':
            return [];
        default:
            return state;
    }
}