import React from "react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";

type ListType = {
    id: number
    city: string
}

type UniRadioPropsType = {
    title: string
    list: Array<ListType>
    onChange: (city: string) => void
}

export const UniRadio = (props: UniRadioPropsType) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.title}</FormLabel>
            <RadioGroup aria-label={props.title} name={props.title}  onChange={(e) => {props.onChange(e.target.value)}}>
                {
                    props.list.map(i => <FormControlLabel key={i.id} value={i.city} control={<Radio />} label={i.city} />)
                }
            </RadioGroup>

        </FormControl>

    )
}