
export type usuarioAction = {
    type: string,
    value:userInitial[]
}
export type userInitial = {
    id:string,
    create: string,
    email: string,
    name: string,
    lastName:string,
}


export const usuarios = (state: userInitial[] = [], action: usuarioAction) => {
    
    console.log('usuarios ',action.value);
    
    switch (action.type) {
        case 'LISTA_USUARIOS':
            return action.value;
        case 'REMOVE_USUARIOS':
            return [];
        default:
            return state;
    }
}