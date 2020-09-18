import React from "react";
import {Slider} from "@material-ui/core";

type RangePropsType = {
    minValue: number
    maxValue: number
    value: number
    onChange: (event: any, newValue: number | number[]) => void
}

export const Range = React.memo((props: RangePropsType) => {

    return (
        <div>
            <Slider
                value={props.value}
                min={props.minValue}
                max={props.maxValue}
                onChange={props.onChange}
                step={1}
                valueLabelDisplay={"auto"}
                color={"secondary"}
            />
        </div>
    )
})