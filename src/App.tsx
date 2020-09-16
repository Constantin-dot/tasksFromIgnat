import React from 'react';
import style from './App.module.css';
import PreJunior from "./pages/PreJunior/PreJunior";
import Junior from "./pages/Junior/Junior";
import JuniorPlus from "./pages/JuniorPlus/JuniorPlus";
import Navbar from "./Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";
import {CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";



const App: React.FC = () => {
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.tasks.isLoading)

    if(isLoading) {
        return <div className={style.loader}>
            <CircularProgress  color="secondary" />
        </div>
    }

    return (
        <HashRouter>
            <div className={style.appWrapperrapper}>
                <div className={'nav'}>
                    <Navbar />
                </div>
                <div className={style.appWrapperContent}>
                    <Route path={'/pre_junior'} component={PreJunior} />
                    <Route path={'/junior'} component={Junior} />
                    <Route path={'/junior_plus'} component={JuniorPlus} />
                </div>
            </div>
        </HashRouter>
    )
}

export default App;
