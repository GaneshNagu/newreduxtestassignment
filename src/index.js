import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import { Provider } from "react-redux";
import { createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Reducer from './Reducer/Reducer';


const store = createStore(Reducer);




// ReactDOM.render(<Provider ><App /></Provider>, document.getElementById('root'));
=======
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
>>>>>>> 4855a6ae264c6e24441d4e87aef800d0e9f64cb7

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
