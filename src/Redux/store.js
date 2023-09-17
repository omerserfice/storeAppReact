import {applyMiddleware, legacy_createStore as createStore, legacy_createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import rootReducers from "./Reducers/rootReducers";

const store = legacy_createStore(rootReducers,applyMiddleware(thunk))

export default store