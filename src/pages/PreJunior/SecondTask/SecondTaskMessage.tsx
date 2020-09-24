import React, {ChangeEvent} from 'react';
import classes from './SecondTask.module.css';
import {CasesType, StateType} from './SecondTask';
import {UniCheckbox} from "../../../common/UniCheckbox";
import {DeleteButton} from "../../../common/DeleteButton";
import {UniButton} from "../../../common/UniButton";
import {FormControlLabel} from "@material-ui/core";

type PropsType = {
    state: StateType
    cases: Array<CasesType>
    removeCases: (id: number) => void
    changeCases: (value: string) => void
    changeStatus: (id: number, isDone:boolean) => void
    filter: string
}

function SecondTaskMessage(props: PropsType)  {


    return (
        <div className={classes.wrap}>
            <div className={classes.ava}>
                <img src={props.state.img} alt={"ava"}/>
            </div>
            <div className={classes.messageBox}>
                <div className={classes.authorName}>{props.state.name}</div>
                <div className={classes.cases}>
                    {
                        props.cases.map(c => {

                            return <div key={c.id} className={c.isDone ? "is-done" : ""}>
                                <FormControlLabel
                                    control={
                                        <UniCheckbox
                                            onChange={() => props.changeStatus(c.id, !c.isDone)}
                                            isDone={c.isDone} color={"primary"}
                                        />
                                    }
                                    label={c.case + ' - ' + c.level}
                                />
                                <DeleteButton onClick={props.removeCases} id={c.id} color={"primary"}/>
                            </div>
                        })
                    }
                </div>
                <div>

                    <UniButton onClick={() => props.changeCases("low")}
                               value={"low"}
                    />
                    <UniButton onClick={() => props.changeCases("middle")}
                               value={"middle"}
                    />
                    <UniButton onClick={() => props.changeCases("high")}
                               value={"high"}
                    />
                    <UniButton onClick={() => props.changeCases("highest")}
                               value={"highest"}
                    />
                    <UniButton onClick={() => props.changeCases("active")}
                               value={"active"}
                    />
                    <UniButton onClick={() => props.changeCases("completed")}
                               value={"completed"}
                    />
                    <UniButton onClick={() => props.changeCases("all")}
                               value={"all"}
                    />
                </div>
                <div className={classes.time}>{props.state.time}</div>
            </div>
        </div>
    );
}

export default SecondTaskMessage;