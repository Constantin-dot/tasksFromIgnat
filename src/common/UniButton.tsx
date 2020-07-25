import React from "react";
import {Button} from "@material-ui/core";


type UniButtonPropsType = {
    onClick: () => void
    value: string
}

export const UniButton = (props: UniButtonPropsType) => {

    return (
        <Button variant={"outlined"}
                onClick={props.onClick}
        >
            {props.value}
        </Button>
    )
}