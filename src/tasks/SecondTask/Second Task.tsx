import React, {useState} from 'react';
import classes from './SecondTask.module.css';
import {StateType2} from "../../state";

type PropsType = {
    state: StateType2
}

type FilterValuesType = "all" | "low" | "middle" | "high" | "highest";

const SecondTask: React.FC<PropsType> = (props) => {

    let [cases, setCases] = useState(props.state.cases);

    function changeFilter(filter: FilterValuesType) {
        if (filter !== 'all') {
            setCases(props.state.cases.filter(f => f.l === filter));
        } else {
            setCases(props.state.cases)
        }
    }

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
                            cases.map(c => <li key={c.id}>
                                <span>{c.c}</span> - <span>{c.l}</span>
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <button onClick={() => {
                        changeFilter("all")
                    }}>all
                    </button>
                    <button onClick={() => {
                        changeFilter("low")
                    }}>low
                    </button>
                    <button onClick={() => {
                        changeFilter("middle")
                    }}>middle
                    </button>
                    <button onClick={() => {
                        changeFilter("high")
                    }}>high
                    </button>
                    <button onClick={() => {
                        changeFilter("highest")
                    }}>highest
                    </button>
                </div>
                <div className={classes.time}>{props.state.time}</div>
            </div>
        </div>
    );
}

export default SecondTask;