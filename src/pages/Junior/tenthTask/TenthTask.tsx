import React, {useCallback} from "react";
import style from "./TenthTask.module.css";
import {UniButton} from "../../../common/UniButton";
import {useDispatch} from "react-redux";
import {setLoadingAC} from "../../../store/tasks-reducer";

const TenthTask = React.memo(() => {
    const dispatch = useDispatch();

    const setLoadingTrue = () => {
        dispatch(setLoadingAC(true))
    }

    const setLoadingFalse = () => {
        dispatch(setLoadingAC(false))
    }

    const setLoadingHandler = useCallback(() => {
        setLoadingTrue();
        setTimeout(setLoadingFalse, 3000);
    }, [])

    return (
        <div className={style.block}>
            <UniButton onClick={setLoadingHandler} value={"start loader"}/>
        </div>
    )
})

export default TenthTask;