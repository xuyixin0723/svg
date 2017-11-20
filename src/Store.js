// import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createStore, combineReducers} from 'redux';
import {reducer as pcbViewReducer} from './pcb_view_svg';
import {reducer as filterReducer} from './filter';
import {reducer as chartsReducer} from './charts';
import {ResultTypes} from './constant'

const reducer = combineReducers({
    comps: pcbViewReducer, 
    filters: filterReducer, 
    chartData: chartsReducer
});

// const middlewares = []; if (process.env.NODE_ENV !== 'production') {
// middlewares.push(require('redux-immutable-state-invariant')()); } const
// storeEnhancers = compose(   applyMiddleware(...middlewares),   (win &&
// win.devToolsExtension) ? win.devToolsExtension() : (f) => f, );

const initFilters = {};
initFilters[ResultTypes.OK] = false;
initFilters[ResultTypes.NG] = true;
initFilters[ResultTypes.FC] = true;

const initState = {
    comps: [],
    filters: initFilters,
    chartData: []
}

export default createStore(reducer, initState);