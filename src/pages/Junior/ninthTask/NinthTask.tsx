import React, {useState} from "react";
import moment from "moment";
import style from "./NinthTask.module.css";
import {UniButton} from "../../../common/UniButton";

const NinthTask = React.memo(() => {

    let timer = moment().format('LTS');

    const [timerId, setTimerId] = useState(1);
    const [timerState, setTimerState] = useState(timer);


    const letsDate = () => {
        let timerId = setInterval(() => {
            setTimerState(moment().format('LTS'));
        }, 1000);
        setTimerId(Number(timerId));
    }

    const stopDate = () => {
        clearInterval(timerId)
    }

    return (
        <div className={style.back}>
            <div className={style.time}>
                {timerState}
                <div className={style.date}>
                    {moment().format('LL')}
                </div>
            </div>
            <UniButton onClick={letsDate} value={"Start"}/>
            <UniButton onClick={stopDate} value={"Stop"}/>
        </div>
    )

})

export default NinthTask;