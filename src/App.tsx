import React from 'react';
import './App.module.css';
import FirstTask from "./tasks/FirstTask/FirstTask";
import SecondTask from "./tasks/SecondTask/SecondTask";
import ThirdTask from "./tasks/ThirdTask/ThirdTask";

const App = () => {
    return (
        <div>
            <FirstTask />
            <SecondTask />
            <ThirdTask />
        </div>
    )
}

export default App;
