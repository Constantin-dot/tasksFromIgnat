import React, {ChangeEvent, useState} from 'react';
import classes from "./ThirdTask.module.css";
import {NamesArrayType, StateType} from "./ThirdTask";

type PropsType = {
    state: StateType
    namesArr: Array<NamesArrayType>
    addFollower: (followerName: string) => void
}



const ThirdTaskMessage : React.FC<PropsType> = (props) => {
    let [name, setName] = useState("");

    const onClickHandler = () => {
        if (name !== '') {
            props.addFollower(name)
            setName("");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: any) => {
        if (e.charCode === 13) {
            onClickHandler();
        }
    }

    return (
        <div className={classes.wrap}>
            <div className={classes.ava}>
                <img src={props.state.img} alt={"ava"}></img>
            </div>
            <div className={classes.messageBox}>
                <div className={classes.authorName}>{props.state.myName}</div>
                <div className={classes.message}>
                    <input
                        value={name}
                        onChange={onChangeHandler}
                        onKeyPress={onKeyPressHandler}
                    />
                    <button onClick={onClickHandler}>add</button>
                    <span> {props.state.namesArr.length} </span>
                </div>
                <div className={classes.time}>{props.state.time}</div>
            </div>
        </div>
    );
}

export default ThirdTaskMessage;