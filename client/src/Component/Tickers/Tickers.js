import {useEffect, useState} from "react";
import {io} from 'socket.io-client';
import {useDispatch, useSelector} from "react-redux";

import css from './Tickers.module.css'
import {Ticker} from "./Ticker";
import {tickerActions} from "../../Redux";



const Tickers = () => {
    const socket = io.connect('http://localhost:4000');

    let {tickers} = useSelector(state => state.tickerReducer);
    const dispatch = useDispatch();

    let array;
    useEffect(() => {
        socket.on('connect', () => {

            socket.emit('start');
            socket.on('ticker', (...arg)=>{
                arg.map((response) => dispatch(tickerActions.addAllTickers(response)))
            });

        });

    }, []);

    return (
        <div className={css.main_div}>
            {tickers?.map((item, index) => <Ticker item={item} key={index}/>)}
        </div>
    );
};

export {Tickers}