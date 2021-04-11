import { login } from "../../api/login";
import { loaddingOff, loaddingOn, menssageOff, menssageOn } from "./effects.actions"


export const chekSesion = ({ email='',password=''}) => {
    return async (dispatch:Function) => {
        dispatch(loaddingOn());
        const data = await login(email, password);
        dispatch(loaddingOff());
        dispatch(menssageOn({
            status: true,
            text: data.message,
            title: '',
            type: data.status ? 'info' : 'danger'
        }));
        setTimeout(()=>dispatch(menssageOff()),2000);
        if (data.status && data.active) {
            dispatch({ type: 'ADD_SESION', value: { ...data.sesion, status: data.status, token: data.token } });
        } else if (data.status && !data.active) {
            console.log('modal para activacion usuario...',data.info);
            dispatch({ type: 'ADD_INFO_USER_SESION', value: data.info });
            dispatch({ type: 'ON_MODAL' });
        }
    }
}

export const cerrarSecion = () => {
    
    return (dispatch: Function) => {
        dispatch({type:'REMOVE_SESION'})
    }
}