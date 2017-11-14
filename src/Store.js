// import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createStore, combineReducers} from 'redux';
import {reducer as pcbViewReducer} from './pcb_view';

const reducer = combineReducers({
    comps: pcbViewReducer,
});



// const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

// const storeEnhancers = compose(
//   applyMiddleware(...middlewares),
//   (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );

export default createStore(reducer, {});