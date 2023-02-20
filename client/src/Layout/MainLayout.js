import {MainPage} from "../Component";
import {Outlet} from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {MainLayout}