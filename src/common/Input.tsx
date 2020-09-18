import React, {ChangeEvent, KeyboardEvent} from "react";
import {TextField} from "@material-ui/core";

type InputPropsType = {
    item: string
    addItem: (item: string) => void
    setItem: (item: string) => void
    error: string
    setError: (value: string) => void
    offEditMode?: () => void
}

export const Input = React.memo((props: InputPropsType) => {

    const onItemChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setError("");
        props.setItem(e.currentTarget.value);
    }

    const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        props.setError("");
        if (e.charCode === 13) {
            if(props.item.trim() !== "") {
                props.addItem(props.item);
            } else {
                props.setError("Field is empty!");
            }
            // props.setItem("");
        }
    }

    return(
        <TextField
            variant={'outlined'}
            label={'New item'}
            type={"text"}
            value={props.item}
            onChange={onItemChange}
            error={!!props.error}
            helperText={props.error}
            onKeyPress={onKeyPressAddItem}
            autoFocus={true}
            onBlur={props?.offEditMode}
        />
    )
})