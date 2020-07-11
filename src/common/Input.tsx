import React, {ChangeEvent, KeyboardEvent} from "react";
import {TextField} from "@material-ui/core";

type InputPropsType = {
    addItem: (item: string) => void
    item: string
    setItem: (value: string) => void
    setError: (value: string) => void
    error: string
}

export const Input = (props: InputPropsType) => {

    const onItemChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setError('');
        props.setItem(e.currentTarget.value);
    }

    const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        props.setError('');
        if (e.charCode === 13) {
            if(props.item.trim() !== "") {
                props.addItem(props.item);
            } else {
                props.setError("Field is empty!");
            }
            props.setItem("");
        }
    }

    return(
        <TextField
            variant={'outlined'}
            label={'New item'}
            type={"text"}
            value={props.item}
            onChange={onItemChange}
            // onKeyPress={onKeyPressAddItem}
            error={!!props.error}
            helperText={props.error}
            onKeyPress={onKeyPressAddItem}
        />
    )
}