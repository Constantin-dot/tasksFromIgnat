import React from 'react';
import SixthTask from "./sixthTask/SixthTask";
import style from './Junior.module.css';
import SeventhTask from "./seventhTask/SeventhTask";
import EighthTask from "./eighthTask/EighthTask";

const Junior = () => {

    return (
        <div className={style.block}>
            <SixthTask />
            <SeventhTask />
            <EighthTask />
        </div>
    )
}

export default Junior;
