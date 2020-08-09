import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Reducer from './Reducer/Reducer';


const store = createStore(Reducer);




// ReactDOM.render(<Provider ><App /></Provider>, document.getElementById('root'));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
