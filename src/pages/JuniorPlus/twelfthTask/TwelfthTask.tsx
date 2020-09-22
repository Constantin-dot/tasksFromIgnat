import React, {useCallback, useState} from "react";
import style from "./TwelfthTask.module.css";
import {UniRadio} from "../../../common/UniRadio";
import {setThemeAC} from "../../../store/themes-reducer";
import {useDispatch} from "react-redux";


const TwelfthTask = React.memo(() => {

    const dispatch = useDispatch()
    let list = [{id: 1, item: 'Light'},
        {id: 2, item: 'Dark'},
        {id: 3, item: 'Bright'}]

    let [value, setValue] = useState('Light')

    const onChangeForRadio = useCallback((item: string) => {
        debugger
        setValue(item)
        dispatch(setThemeAC(item))
    },[])

    return (
        <div className={style.block}>
            <UniRadio
                color={"default"}
                value={value}
                title={"Theme"}
                list={list}
                onChange={onChangeForRadio}
            />
        </div>
    )
})

export default TwelfthTask;