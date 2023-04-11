import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
import {setTimerMiddleware} from './setTimerMiddleware'


const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({reducer:reducers},applyMiddleware(setTimerMiddleware))
root.render(
  <Provider store={store}>
        <App />
  </Provider>

 
);


