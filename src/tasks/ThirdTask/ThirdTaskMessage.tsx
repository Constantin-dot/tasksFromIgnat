import React, {useState} from 'react';
import classes from "./ThirdTask.module.css";
import {NamesArrayType, StateType} from "./ThirdTask";
import {AddButton} from "../../common/AddButton";
import {Input} from "../../common/Input";

type PropsType = {
    state: StateType
    namesArr: Array<NamesArrayType>
    addItem: (followerName: string) => void
}

const ThirdTaskMessage : React.FC<PropsType> = (props) => {
    let [name, setName] = useState("");
    let [error, setError] = useState<string>('');

    const onClickHandler = () => {
        if (name.trim() !== '') {
            props.addItem(name)
            setName("");
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
                    <Input
                        addItem={props.addItem}
                        item={name}
                        setItem={setName}
                        error={error}
                        setError={setError}
                    />
                    <AddButton
                        addItem={onClickHandler}
                        item={name}
                        setItem={setName}
                        setError={setError}
                    />
                    <span> {props.state.namesArr.length} </span>
                </div>
                <div className={classes.time}>{props.state.time}</div>
            </div>
        </div>
    );
}

export default ThirdTaskMessage;