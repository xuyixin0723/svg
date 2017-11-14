import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import SpcApp from './SpcApp'
// import registerServiceWorker from './registerServiceWorker';
import store from './Store.js';

ReactDOM.render(
    <Provider store={store}>
        <SpcApp />
    </Provider>, 
    document.getElementById('root')
);
// registerServiceWorker();
