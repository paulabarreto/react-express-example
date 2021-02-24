import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga'
// import {createLogger} from 'redux-logger'

// import { reducer } from './reducer'
import { defaultState } from '../../server/defaultState'
// import * as sagas from './sagas'

// const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    function reducer(state = defaultState, action) {
        return state;
    },
    // applyMiddleware(createLogger(), sagaMiddleware)
);

// for (let saga in sagas) {
//     sagaMiddleware.run(sagas[saga]);
// }