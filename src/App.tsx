import React from 'react';
import './App.module.css';
import FirstTask from "./tasks/FirstTask/FirstTask";
import SecondTask from "./tasks/SecondTask/Second Task";
import {StateType1, StateType2} from "./state";

type PropsType = {
    state1: StateType1
    state2: StateType2
}

const App : React.FC<PropsType> = (props) => {
    return (
        <div>
            <FirstTask
                state={props.state1}
            />
            <SecondTask
                state={props.state2}
            />
        </div>
    )
}

export default App;
