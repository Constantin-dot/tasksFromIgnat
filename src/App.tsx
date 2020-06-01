import React from 'react';
import './App.module.css';
import FirstTask from "./tasks/FirstTask/FirstTask";

export type StateType = {
    name: string
    message: string
    time: string
}

let state: StateType = {
    name: "Constantin",
    message: "Hi!What's up?",
    time: "15:23"
}

const App = () => {
    return (
        <FirstTask state={state}/>
        )
}

export default App;
