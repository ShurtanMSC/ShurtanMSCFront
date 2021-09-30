import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import {AppProvider} from './context';

ReactDOM.render(
    <Provider store={store} >
        <AppProvider>
            <Router>
                <App/>
            </Router>
        </AppProvider>
    </Provider>,
    document.getElementById('root'))