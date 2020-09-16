import React from 'react';
import SixthTask from "./sixthTask/SixthTask";
import style from './Junior.module.css';
import SeventhTask from "./seventhTask/SeventhTask";
import EighthTask from "./eighthTask/EighthTask";
import NinthTask from "./ninthTask/NinthTask";
import TenthTask from "./tenthTask/TenthTask";

const Junior = () => {

    return (
        <div className={style.block}>
            <SixthTask />
            <SeventhTask />
            <EighthTask />
            <NinthTask />
            <TenthTask />
        </div>
    )
}

export default Junior;
