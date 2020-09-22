import React, {useCallback, useState} from "react";
import style from './SeventhTask.module.css';
import {UniRadio} from "../../../common/UniRadio";
import {UniSelect} from "../../../common/UniSelect";

const SeventhTask = React.memo(() => {
    let list1 = [{id: 1, item: 'Minsk'},
        {id: 2, item: 'Moscow'},
        {id: 3, item: 'Kiev'},
        {id: 4, item: 'Paris'},
        {id: 5, item: 'Budapest'},
        {id: 6, item: 'Berlin'},
        {id: 7, item: 'London'},
        {id: 8, item: 'Madrid'}];

    let list2 = [{id: 1, item: "car"},
        {id: 2, item: "bus"},
        {id: 3, item: "train"},
        {id: 4, item: "plane"},
    ]

    let [value, setValue] = useState('Minsk');
    let [transport, setTransport] = useState('car');

    const onChangeForRadio = useCallback((item: string) => {
        setValue(item);
    }, [])

    const onChangeForSelect = useCallback((item: string) => {
        if(item) {
            setTransport(item);
        }
    }, [])

    return (
        <div className={style.seventh}>
            <UniRadio
                color={"secondary"}
                value={value}
                title={"Cities"}
                list={list1}
                onChange={onChangeForRadio}
            />
            <UniSelect
                title={"Transport"}
                list={list2}
                onChange={onChangeForSelect}
                value={transport}
            />
            {`Your are going to travel to ${value} on a ${transport}.`}
        </div>
    )
})

export default SeventhTask;