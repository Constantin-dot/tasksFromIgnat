import React, {useState} from 'react';
import EditableSpan from "../../common/EditableSpan";
import {UniButton} from "../../common/UniButton";

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

// type MessageType = {
//     id: string
//     x: string
// }
// type StoreType = Array<MessageType>;

// let store: StoreType = [];

const SixthTask = () => {
    let [item, setItem] = useState("This is EditableSpan.");
    let [error, setError] = useState<string>("");

    const addMessage = () => {
        // store.push({id: v1(), x: item});

        saveState<StateType>("test", {x: item, y: 1});
    }

    const restoreMessage = () => {
        // let lastItem = store[store.length - 1];
        // setItem(lastItem.x);

        const state: StateType = restoreState<StateType>("test", {x: "", y: 0});
        setItem(state.x);
    }

    return (
        <div>
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
