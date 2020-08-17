import React, {useState} from "react";
import style from './SeventhTask.module.css';
import {UniRadio} from "../../../common/UniRadio";
import {UniSelect} from "../../../common/UniSelect";

const SeventhTask = () => {
    let list = [{id: 1, city: 'Minsk'},
        {id: 2, city: 'Moscow'},
        {id: 3, city: 'Kiev'},
        {id: 4, city: 'Paris'},
        {id: 5, city: 'Budapest'},
        {id: 6, city: 'Berlin'},
        {id: 7, city: 'London'},
        {id: 8, city: 'Madrid'}];

    let way = [{id: 1, way: "car"},
        {id: 2, way: "bus"},
        {id: 3, way: "train"},
        {id: 4, way: "plane"},
    ]

    let [value, setValue] = useState('');
    let [transport, setTransport] = useState('');

    const onChangeForRadio = (city: string) => {
        setValue(city);
    }

    const onChangeForSelect = (way: string) => {
        if(way) {
            setTransport(way);
        }
    }

    return (
        <div className={style.seventh}>
            <UniRadio
                title={"Cities"}
                list={list}
                onChange={onChangeForRadio}
            />
            <UniSelect
                title={"Transport"}
                way={way}
                onChange={onChangeForSelect}
                transport={transport}
            />
            {`Your are going to travel to ${value} on a ${transport}.`}
        </div>
    )
}

export default SeventhTask;