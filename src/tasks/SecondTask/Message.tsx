import React from 'react';
import classes from './SecondTask.module.css';
import {CasesType, StateType} from './SecondTask';

type PropsType = {
    state: StateType
    cases: Array<CasesType>
    removeCases: Function
    changeCases: Function
}

function Message(props: PropsType)  {

    return (
        <div className={classes.wrap}>
            <div className={classes.ava}>
                <img src={props.state.img} alt={"ava"}></img>
            </div>
            <div className={classes.messageBox}>
                <div className={classes.authorName}>{props.state.name}</div>
                <div className={classes.cases}>
                    <ul>
                        {
                            props.cases.map(c => <li key={c.id}>
                                <span>{c.case}</span> - <span>{c.level}</span>
                                <button onClick={() => {props.removeCases(c.id)}}>x</button>
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <button onClick={ () => {props.changeCases("all")}}>all
                    </button>
                    <button onClick={ () => {props.changeCases("low")}}>low
                    </button>
                    <button onClick={ () => {props.changeCases("middle")}}>middle
                    </button>
                    <button onClick={ () => {props.changeCases("high")}}>high
                    </button>
                    <button onClick={ () => {props.changeCases("highest")}}>highest
                    </button>
                </div>
                <div className={classes.time}>{props.state.time}</div>
            </div>
        </div>
    );
}

export default Message;