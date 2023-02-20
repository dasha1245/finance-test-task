import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    tickers: [],
    ownTickers: [],
    tickersNames: []
}

const tickerSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        addAllTickers: (state, action) => {
            state.tickers = action.payload
        },

    },
    extraReducers: {}
})

const {
    reducer: tickerReducer, actions: {
        addAllTickers
    }
} = tickerSlice;

const tickerActions = {
    addAllTickers
}
export {
    tickerReducer,
    tickerActions
}