import React from "react";
// import yellow from '@material-ui/core/colors/red';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";

type ListType = {
    id: number
    item: string
}

type UniRadioPropsType = {
    color?: 'primary' | 'secondary' | 'default'
    value: string
    title: string
    list: Array<ListType>
    onChange: (item: string) => void
}

export const UniRadio = (props: UniRadioPropsType) => {
    // const accent = yellow[500];
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.title}</FormLabel>
            <RadioGroup aria-label={props.title} name={props.title} value={props.value} onChange={(e) => {props.onChange(e.target.value)}}>
                {
                    props.list.map(i => <FormControlLabel key={i.id} value={i.item} control={<Radio color={props.color}/>} label={i.item} />)
                }
            </RadioGroup>

        </FormControl>

    )
}