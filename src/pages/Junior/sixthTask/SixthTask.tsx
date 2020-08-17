import React, {useState} from 'react';
import EditableSpan from "../../../common/EditableSpan";
import {UniButton} from "../../../common/UniButton";
import style from './SixthTask.module.css';

export function saveState<T> (key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}

type StateType = {
    x: string
    y: number
}

const SixthTask = () => {
    let [item, setItem] = useState("This is EditableSpan.");
    let [error, setError] = useState<string>("");

    const addMessage = () => {

        saveState<StateType>("test", {x: item, y: 1});
    }

    const restoreMessage = () => {
        const state: StateType = restoreState<StateType>("test", {x: "", y: 0});
        setItem(state.x);
    }

    return (
        <div className={style.sixth}>
            <div>
                <EditableSpan
                    item={item}
                    addItem={setItem}
                    setItem={setItem}
                    error={error}
                    setError={setError}
                />
            </div>
            <div>
                <UniButton onClick={addMessage} value={'Save'}/>
                <UniButton onClick={restoreMessage} value={'Set'}/>
            </div>
        </div>
    )
}

export default SixthTask;
