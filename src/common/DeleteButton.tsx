import React from "react";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type DeleteButtonPropsType = {
    color?: any
    onClick: (id: number) => void
    id: number
}

export const DeleteButton = (props: DeleteButtonPropsType) => {
    const deleteItem = () => {
        props.onClick(props.id);
    }

    return (
        <IconButton onClick={deleteItem}>
            <Delete color={props.color}/>
        </IconButton>
    )
}