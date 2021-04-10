import { getAllUsers, getAUserId } from "../../api/users.api"
import { loaddingOff, loaddingOn, menssageOff, menssageOn } from "./effects.actions";


export const optenerUsuarios = () => {
    
    return async (dispatch: Function) => {
        dispatch(loaddingOn());
        dispatch({ type: 'REMOVE_USUARIOS' });
        try {
            const value = await getAllUsers();             
            dispatch(menssageOn({
                status: true,
                text: `Total ${value.length} usuarios...`,
                title: '',
                type: 'info'
            }));
            dispatch({ type: 'LISTA_USUARIOS', value });
        } catch(error) {
            dispatch(menssageOn({
                status: true,
                text: `Error al descargar usuarios!!!`,
                title: '',
                type: 'danger'
            }));
        }
        setTimeout(() => {        
            dispatch(menssageOff());
        },2000)
        dispatch(loaddingOff());
    }
}

export const usuarioId = (id='') => {
    return async (dispatch: Function) => {        
        dispatch(loaddingOn());
        try {
            const value = await getAUserId(id);
            console.log('usuario id: ',value);
            
            if (value) {
                dispatch(menssageOn({
                    status: true,
                    text: `usuario: ${id}...`,
                    title: '',
                    type: 'info'
                }));
                dispatch({ type:'SELECTED_USER_ID', value });
            } else {
                dispatch(menssageOn({
                status: true,
                text: `Error al descargar usuario!!!`,
                title: '',
                type: 'danger'
            }));
            }
        } catch (err) {
            console.error(err);        
        }

        setTimeout(() => {        
            dispatch(menssageOff());
        },2000)
        dispatch(loaddingOff());
    }
}
