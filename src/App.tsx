import React from 'react';
import './App.module.css';
import PreJunior from "./pages/PreJunior/PreJunior";
import Junior from "./pages/Junior/Junior";
import JuniorPlus from "./pages/JuniorPlus/JuniorPlus";
import Navbar from "./Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";

const App = () => {

    return (
        <HashRouter>
            <div className={'app-wrapper'}>
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route path={'/pre_junior'} component={PreJunior} />
                    <Route path={'/junior'} component={Junior} />
                    <Route path={'/junior_plus'} component={JuniorPlus} />
                    {/*<PreJunior />*/}
                    {/*<Junior />*/}
                    {/*<JuniorPlus />*/}
                </div>
            </div>
        </HashRouter>
    )
}

export default App;
