import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import { Provider } from "react-redux";
import { configureStore,applyMiddleware } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import reducers from "./reducers"




const root=ReactDOM.createRoot(document.getElementById('root'))
const store=configureStore({reducers:reducers},applyMiddleware(thunk))
root.render(
    <Provider store={store}>
         <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
   

)