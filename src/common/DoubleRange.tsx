import React from "react";
import {Slider} from "@material-ui/core";

type DoubleRangePropsType = {
    minValue: number
    maxValue: number
    value: number[]
    onChange: (event: any, newValue: number | number[]) => void
}

export const DoubleRange = React.memo((props: DoubleRangePropsType) => {

    return (
        <div>
            <Slider
                value={props.value}
                onChange={props.onChange}
                min={props.minValue}
                max={props.maxValue}
                aria-labelledby={"range-slider"}
                step={1}
                valueLabelDisplay={"auto"}
                color={"secondary"}
            />
        </div>
    )
})