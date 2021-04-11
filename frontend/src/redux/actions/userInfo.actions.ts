import types, { userInfoInitType } from '../types/userInfo.type';

export const addUserInfo = (data:userInfoInitType) => {
    return (dispatch:Function) => {
        dispatch({ type: types.ADD_INFO_USER_SESION, value: data });
    }
}

export const addUserInfoFecha = (value:string) => {
    return (dispatch:Function) => {
        dispatch({ type: types.ADD_INFO_FECHA, value: value });
    }
}
export const addUserInfoTel = (value:string) => {
    return (dispatch:Function) => {
        dispatch({ type: types.ADD_INFO_TEL, value: value });
    }
}