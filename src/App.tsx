import React from 'react';
import './App.module.css';
import FirstTask from "./tasks/FirstTask/FirstTask";
import SecondTask from "./tasks/SecondTask/SecondTask";

const App = () => {
    return (
        <div>
            <FirstTask />
            <SecondTask />
        </div>
    )
}

export default App;
