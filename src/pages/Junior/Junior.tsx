import React from 'react';
import SixthTask from "./sixthTask/SixthTask";
import style from './Junior.module.css';
import SeventhTask from "./seventhTask/SeventhTask";

const Junior = () => {

    return (
        <div className={style.block}>
            <SixthTask />
            <SeventhTask />
        </div>
    )
}

export default Junior;
