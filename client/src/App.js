import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./Layout";
import {MainPage} from "./Component";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/'} element={<MainPage/>}/>
                </Route>
            </Routes>
            <MainLayout/>
        </div>
    );
}

export default App;
