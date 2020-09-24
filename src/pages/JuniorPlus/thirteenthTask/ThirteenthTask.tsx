import React, {useCallback} from "react";
import style from "./ThirteenthTask.module.css";
import {UniCheckbox} from "../../../common/UniCheckbox";
import {UniButton} from "../../../common/UniButton";
import {useDispatch, useSelector} from "react-redux";
import {changeCheckboxTC, setCheckBoxAC} from "../../../store/tasks-reducer";
import {AppRootStateType} from "../../../store/store";

const ThirteenthTask = React.memo(() => {
    const errorMessage = useSelector<AppRootStateType, string | null>(state => state.tasks.error)
    const isChecked = useSelector<AppRootStateType, boolean>(state => state.tasks.isChecked)
    const dispatch = useDispatch()

    const setCheckBoxHandler = useCallback(() => {
        dispatch(setCheckBoxAC(!isChecked))
    }, [isChecked])

    const changeCheckBoxHandler = useCallback(() => {
        dispatch(changeCheckboxTC(isChecked))
    }, [isChecked])

    return (
        <div className={style.block}>
            {errorMessage}
            <UniCheckbox onChange={setCheckBoxHandler} isDone={isChecked} color={"default"}/>
            <UniButton onClick={changeCheckBoxHandler} value={'check it'}/>
        </div>
    )
})

export default ThirteenthTask;