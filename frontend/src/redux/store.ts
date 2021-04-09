import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { efectsInitialState, effects } from './reducers/effects';
import { formGasto, initGasto } from './reducers/gasto';
import { sesion, sesionInitialState } from './reducers/sesion';
import { usuarios } from './reducers/usuarios';
import { usurioSeleccionado,usuarioSelInit } from './reducers/usurioSeleccionado';

const reducers = combineReducers({
    formGasto,
    sesion,
    effects,
    usuarios,
    usurioSeleccionado,
});

const initialState = {
    formGasto   : initGasto,
    sesion      : sesionInitialState,
    effects     : efectsInitialState,
    usuarios    : [],
    usurioSeleccionado:usuarioSelInit,
}
console.log(usuarioSelInit);


export default createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
);
