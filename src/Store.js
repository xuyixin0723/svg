// import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createStore, combineReducers} from 'redux';
import {reducer as pcbViewReducer} from './pcb_view';
import {reducer as filterReducer} from './filter';
// import {ResultTypes} from './constant'

const reducer = combineReducers({comps: pcbViewReducer, filters: filterReducer});

// const middlewares = []; if (process.env.NODE_ENV !== 'production') {
// middlewares.push(require('redux-immutable-state-invariant')()); } const
// storeEnhancers = compose(   applyMiddleware(...middlewares),   (win &&
// win.devToolsExtension) ? win.devToolsExtension() : (f) => f, );

// const initFilters = {};
// initFilters[ResultTypes.OK] = false;
// initFilters[ResultTypes.NG] = true;
// initFilters[ResultTypes.FC] = true;

// const initState = {
//     filters: initFilters,
// }


export default createStore(reducer, {});