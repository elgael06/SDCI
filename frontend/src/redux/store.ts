import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { efectsInitialState, effects } from './reducers/effects';
import { formGasto, initGasto } from './reducers/gasto';
import { sesion, sesionInitialState } from './reducers/sesion';
import { usuarios } from './reducers/usuarios';

const reducers = combineReducers({
    formGasto,
    sesion,
    effects,
    usuarios
});

const initialState = {
    formGasto   : initGasto,
    sesion      : sesionInitialState,
    effects     : efectsInitialState,
    usuarios    : []
}

export default createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
);
