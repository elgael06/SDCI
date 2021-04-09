

export const userSelected = (idUser:string) => {
    
}

export const defaultUserValues = () => {
    
    return (dispatch:Function) => {
        dispatch({ type: 'DEFAULT_USER_ID' });
    }
}

export const sendNewUsuario = ({
    name= '',
    lastName= '',
    email= '',
    puesto=''
}) => {
    return async (dispatch: Function) => {
        
        dispatch({ type: 'DEFAULT_USER_ID' });
    }
}