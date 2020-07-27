import React from 'react';
import classes from './SecondTask.module.css';
import {CasesType, StateType} from './SecondTask';
import {UniCheckbox} from "../../../common/UniCheckbox";
import {DeleteButton} from "../../../common/DeleteButton";
import {UniButton} from "../../../common/UniButton";
// import {UniButton} from "../../../common/UniButton";

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
                                <UniCheckbox
                                    changeStatus={props.changeStatus}
                                    isDone={c.isDone}
                                    id={c.id}
                                    case={c.case}
                                    level={c.level}
                                />
                                <DeleteButton onClick={props.removeCases} id={c.id}/>
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