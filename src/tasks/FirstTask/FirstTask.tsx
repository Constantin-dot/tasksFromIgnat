import React from 'react';
import classes from './FirstTask.module.css';
import {StateType} from "../../App";

type PropsType = {
    state: StateType
}

const FirstTask : React.FC<PropsType> = (props) => {
    return (
        <div className={classes.wrap}>
            <div className={classes.ava}>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU"} alt={"ava"}></img>
            </div>
            <div className={classes.messageBox}>
                <div className={classes.authorName}>{props.state.name}</div>
                <div className={classes.message}>{props.state.message}</div>
                <div className={classes.time}>{props.state.time}</div>
            </div>
        </div>
    );
}

export default FirstTask;