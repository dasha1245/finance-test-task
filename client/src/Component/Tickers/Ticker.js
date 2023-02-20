import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {useDispatch} from "react-redux";

import css from './Ticker.module.css';
import {tickerActions} from "../../Redux";

const Ticker = ({item, index}) => {
    const {ticker, price, change, change_percent} = item;
    let tickerName;
    const dispatch = useDispatch();

    const [currentPrice, setCurrentPrice] = useState(price);
    const [priceIncrease, setPriceIncrease] = useState(false);

    if (currentPrice < price) {
        setPriceIncrease(true);
        setCurrentPrice(price);
    } else if (currentPrice > price) {
        setPriceIncrease(false);
        setCurrentPrice(price);
    }


    switch (ticker) {
        case 'AAPL':
            tickerName = 'Apple'
            break;
        case 'GOOGL':
            tickerName = 'Alphabet'
            break;
        case 'MSFT':
            tickerName = 'Microsoft'
            break;
        case 'AMZN':
            tickerName = 'Amazon'
            break;
        case 'FB':
            tickerName = 'Facebook'
            break;
        case 'TSLA':
            tickerName = 'Tesla'
            break;
    }
    return (
        <div className={css.main_div}>
            <div className={css.header}>
                <div className={css.ticker_name_div_main}>
                    <div className={css.ticker_name_div}>{ticker}</div>
                    <p className={css.ticker_name}>{tickerName}</p>
                </div>

            </div>

            <div>
                <p className={css.price}>Ціна: {price}$</p>

                <div className={css.chane_main_div}>
                    <div className={css.change_price_div}>
                        <p className={priceIncrease ? css.display_none : css.price_down}>
                            <FontAwesomeIcon icon={solid('arrow-down')}
                                             className={css.icon_arrow}/>
                            {change_percent} %
                        </p>
                        <p className={priceIncrease ? css.price_up : css.display_none}>
                            <FontAwesomeIcon icon={solid('arrow-up')}
                                             className={css.icon_arrow}/>
                            {change_percent} %
                        </p>
                    </div>

                    <div className={css.change_price_div}>
                        <p className={priceIncrease ? css.display_none : css.price_down}>
                            - {change} $
                        </p>
                        <p className={priceIncrease ? css.price_up : css.display_none}>
                            + {change_percent} $
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export {Ticker}