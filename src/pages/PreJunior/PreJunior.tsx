import React from "react";
import style from "./PreJunior.module.css";
import FirstTask from "./FirstTask/FirstTask";
import SecondTask from "./SecondTask/SecondTask";
import ThirdTask from "./ThirdTask/ThirdTask";


const PreJunior = () => {
    return (
        <div className={style.block}>
            <FirstTask />
            <SecondTask />
            <ThirdTask />
        </div>
    )
}

export default PreJunior;
