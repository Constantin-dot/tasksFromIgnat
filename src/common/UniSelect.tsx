import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

type ItemType = {
    id: number
    item: string
}

type UniSelectPropsType = {
    list: Array<ItemType>
    title: string
    onChange: (item: string) => void
    value: string
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
                value={props.value}
                onChange={(e) => {props.onChange(e.target.value as string)}}
                label="Age"
            >
                {
                    props.list.map(i => <MenuItem key={i.id} value={i.item}>{i.item}</MenuItem>)
                }
            </Select>
        </FormControl>
    )
}