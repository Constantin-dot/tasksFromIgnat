import React, {ChangeEvent} from "react";
import {Checkbox} from "@material-ui/core";

type CheckboxPropsType = {
    changeStatus: (id: number, isDone: boolean) => void
    isDone: boolean
    id: number
}

export const UniversalCheckbox = (props: CheckboxPropsType) => {
    const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(props.id, e.currentTarget.checked);
    }

    return <Checkbox
        color={"default"}
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        checked={props.isDone}
        onChange={onStatusChangeHandler}
    />
};