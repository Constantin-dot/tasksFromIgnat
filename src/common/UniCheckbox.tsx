import React, {ChangeEvent} from "react";
import {Checkbox, FormControlLabel} from "@material-ui/core";

type CheckboxPropsType = {
    changeStatus: (id: number, isDone: boolean) => void
    isDone: boolean
    id: number
    case: string
    level: string
}

export const UniCheckbox = (props: CheckboxPropsType) => {
    const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(props.id, e.currentTarget.checked);
    }

    return <FormControlLabel
        control={
            <Checkbox
                color={"default"}
                inputProps={{ 'aria-label': 'checkbox with default color' }}
                checked={props.isDone}
                onChange={onStatusChangeHandler}
            />
        }
        label={props.case + ' - ' + props.level}
    />
};