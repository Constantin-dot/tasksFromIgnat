import React from "react";
import {Button} from "@material-ui/core";


type UniButtonPropsType = {
    onClick: (value: string) => void
    value: string
    variant: string
    filter: string
}

export const UniButton = (props: UniButtonPropsType) => {
    const setButton = () => {
        props.onClick(props.value);
    }

    return (
        <Button variant={ props.filter === props.variant ? "contained" : "outlined"}
                onClick={setButton}
        >
            {props.value}
        </Button>
    )
}