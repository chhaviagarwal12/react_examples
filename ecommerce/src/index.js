import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './styles.css'
import { Provider } from "react-redux";
import { configureStore,applyMiddleware } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import reducers from "./reducers"



const store=configureStore(reducers,applyMiddleware(thunk))
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
         <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
   

)