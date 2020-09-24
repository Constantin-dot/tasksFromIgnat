import React from 'react';
import TwelfthTask from "./twelfthTask/TwelfthTask";
import style from "./JuniorPlus.module.css";
import ThirteenthTask from "./thirteenthTask/ThirteenthTask";

const JuniorPlus = () => {
    return (
        <div className={style.block}>
            <TwelfthTask />
            <ThirteenthTask />
        </div>
    )
}

export default JuniorPlus;
