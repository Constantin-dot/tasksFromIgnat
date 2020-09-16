import React, {useReducer} from "react";
import style from './EighthTask.module.css';
import {v1} from "uuid";
import {UniButton} from "../../../common/UniButton";
import {Check, hwReducer, Sort} from "../../../store/homeWork-reducer";

const EighthTask = () => {

    let [people, dispatchToPeopleList] = useReducer(hwReducer, [
        {id: v1(), name: "Ivanov_Ivan", age: 32},
        {id: v1(), name: "Petrova_Mariya", age: 16},
        {id: v1(), name: "Sholohov_Dmitriy", age: 28},
        {id: v1(), name: "Novinskaya_Anna", age: 26},
        {id: v1(), name: "Kuznetsov_German", age: 13},
    ]);

    function sortUp (payload: string) {
        dispatchToPeopleList(Sort(payload));
    }

    function sortDown (payload: string) {
        dispatchToPeopleList(Sort(payload));
    }

    function sortAge (payload: number) {
        dispatchToPeopleList(Check(payload));
    }

    return (
        <div className={style.eighth}>
            {people.map(u => <div>{u.name}</div>)}
            <UniButton onClick={() => {sortUp('up')}} value={'Up'}/>
            <UniButton onClick={() => {sortDown('down')}} value={'Down'}/>
            <UniButton onClick={() => {sortAge(18)}} value={'18+'}/>
        </div>
    )
}

export default EighthTask;