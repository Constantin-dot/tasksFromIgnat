import React from 'react';
import FirstTaskMessage from "./FirstTaskMessage";

export type StateType = {
    img: string
    name: string
    message: string
    time: string
}

const FirstTask = () => {
    let state: StateType = {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU",
        name: "Constantin",
        message: "Hi!What's up?",
        time: "15:23"
    }

    return (
        <FirstTaskMessage state={state}/>
    );
}

export default FirstTask;