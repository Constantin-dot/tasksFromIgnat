import React from 'react';
import classes from "./FirstTask.module.css";
import {StateType} from "./FirstTask";

type PropsType = {
    state: StateType
}

const Message : React.FC<PropsType> = (props) => {
    return (
        <div className={classes.wrap}>
            <div className={classes.ava}>
                <img src={props.state.img} alt={"ava"}></img>
            </div>
            <div className={classes.messageBox}>
                <div className={classes.authorName}>{props.state.name}</div>
                <div className={classes.message}>{props.state.message}</div>
                <div className={classes.time}>{props.state.time}</div>
            </div>
        </div>
    );
}

export default Message;