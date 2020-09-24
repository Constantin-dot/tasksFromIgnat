import React from "react";
import {Checkbox} from "@material-ui/core";

type CheckboxPropsType = {
    onChange: () => void
    isDone: boolean
    color?: any
}

export const UniCheckbox = (props: CheckboxPropsType) => {
    return <Checkbox
        color={props.color}
        inputProps={{'aria-label': 'checkbox with default color'}}
        checked={props.isDone}
        onChange={props.onChange}
    />
}