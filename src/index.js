import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,combineReducers} from 'redux';

import counterReducer from './Store/counter';
import resultReducer from './Store/results';



import {Provider} from "react-redux";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer=combineReducers({
    ctr:counterReducer,
    res:resultReducer
})


const store=createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
