import React from "react";
import {IconButton} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";

type AddButtonPropsType = {
    addItem: (item: string) => void
    item: string
    setItem: (value: string) => void
    setError: (value: string) => void
}

export const AddButton = (props: AddButtonPropsType) => {
    const onAddItemClick = () => {
        if(props.item.trim() !== "") {
            props.addItem(props.item);
        } else {
            props.setError("Field is empty!");
        }
        props.setItem("");
    }

    return (
        <IconButton
                    onClick={onAddItemClick}
                    color={'primary'}
        >
            <ControlPoint />
        </IconButton>
    )
}