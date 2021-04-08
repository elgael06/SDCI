import { getAllUsers } from "../../api/users.api"
import { loaddingOff, loaddingOn, menssageOff, menssageOn } from "./effects.actions";


export const optenerUsuarios = (token='') => {
    
    return async (dispatch: Function) => {
        dispatch(loaddingOn());
        dispatch({ type: 'REMOVE_USUARIOS' });
        try {
            const value = await getAllUsers(token);             
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
