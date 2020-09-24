import React, {useCallback, useState} from "react";
import style from "./TwelfthTask.module.css";
import {UniRadio} from "../../../common/UniRadio";
import {setThemeAC} from "../../../store/themes-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";


const TwelfthTask = React.memo(() => {
    const theme = useSelector<AppRootStateType, string>(state => state.themes.theme)
    const dispatch = useDispatch()
    let list = [{id: 1, item: 'Light'},
        {id: 2, item: 'Dark'},
        {id: 3, item: 'Bright'}]

    const onChangeForRadio = useCallback((item: string) => {
        dispatch(setThemeAC(item))
    },[])

    return (
        <div className={style.block}>
            <UniRadio
                color={"default"}
                value={theme}
                title={"Theme"}
                list={list}
                onChange={onChangeForRadio}
            />
        </div>
    )
})

export default TwelfthTask;