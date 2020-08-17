import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

type WayType = {
    id: number
    way: string
}

type UniSelectPropsType = {
    way: Array<WayType>
    title: string
    onChange: (way: any) => void
    transport: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export const UniSelect = (props: UniSelectPropsType) => {

    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">{props.title}</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={props.transport}
                onChange={(e) => {props.onChange(e.target.value)}}
                label="Age"
            >
                {
                    props.way.map(i => <MenuItem key={i.id} value={i.way}>{i.way}</MenuItem>)
                }
            </Select>
        </FormControl>
    )
}