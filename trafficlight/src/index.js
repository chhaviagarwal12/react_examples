import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'


const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({reducer:reducers})
root.render(
  <Provider store={store}>
        <App />
  </Provider>

 
);


