import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { efectsInitialState, effects } from './reducers/effects';
import { formGasto, initGasto } from './reducers/gasto';
import { sesion, sesionInitialState } from './reducers/sesion';

const reducers = combineReducers({
    formGasto,
    sesion,
    effects,
});

const initialState = {
    formGasto   : initGasto,
    sesion      : sesionInitialState,
    effects     : efectsInitialState,
}

export default createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
);
