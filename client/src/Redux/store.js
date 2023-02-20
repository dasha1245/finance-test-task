import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {tickerReducer} from './slices'

const rootReducer = combineReducers({
    tickerReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}