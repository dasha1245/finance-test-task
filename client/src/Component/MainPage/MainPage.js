import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

import css from './MainPage.module.css'
import {Tickers} from "../Tickers";

const MainPage = () => {
    const [activeBurger, setActiveBurger] = useState(false);

    return (
        <div className={css.main_div}>
            <FontAwesomeIcon icon={solid('bars')}
                             onClick={() => {
                                 setActiveBurger(prev => !prev)
                             }}
                             className={activeBurger?css.icon_bars:css.icon_bars_change_color}/>
            <div className={activeBurger?css.back_div:css.display_none}
                 onClick={() => setActiveBurger(prev => !prev)}></div>
            <div className={activeBurger?css.menu_div:css.display_none}>

                <div className={css.menu_text_div}>
                    <FontAwesomeIcon icon={solid('user-tie')} className={css.icon_user}/>
                    <p className={css.menu_text}>Особистий кабінет</p>
                </div>

            </div>

            <div className={css.content}>
                <p className={css.content_header_text}>Слідкуйте за акціями в режимі реального часу!</p>
                <p className={css.content_text}>Тут ви можете слідкувати за всіма активами.</p>
            </div>

            <div>
                <Tickers/>
            </div>
        </div>
    );
};

export {MainPage}