import React, {useCallback} from "react";
import style from "./EleventhTask.module.css";
import {Range} from "../../../common/Range";
import {DoubleRange} from "../../../common/DoubleRange";


const EleventhTask = React.memo(() => {
    const [value, setValue] = React.useState<number>(10);
    const [doubleValue, setDoubleValue] = React.useState<number[]>([1, 10]);

    const onChange = useCallback((event: any, newValue: number | number[]) => {
        setValue(newValue as number);
    }, []);

    const onChangeForDoubleValue = useCallback((event: any, newValue: number | number[]) => {
        setDoubleValue(newValue as number[]);
    }, []);

    return (
        <div className={style.back}>
            <Range minValue={0} maxValue={20} value={value} onChange={onChange}/>
            <DoubleRange minValue={0} maxValue={20} value={doubleValue} onChange={onChangeForDoubleValue}/>
        </div>
    )

})

export default EleventhTask;