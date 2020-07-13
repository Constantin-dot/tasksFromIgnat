import React from 'react';
import {Input} from "../common/Input";
import {UniversalCheckbox} from "../common/Checkbox";
import {AddButton} from "../common/AddButton";
import {DeleteButton} from "../common/DeleteButton";
import {UniButton} from "../common/UniButton";
import {action} from "@storybook/addon-actions";


export default {
    title: 'StandForComponents',
    // component: AddButton,
};

export const UniversalInput = () => {
    return <Input setError={x => x} setItem={x => x} item={''} error={''} addItem={x => x}/>;
}

export const Checkbox = () => {
    return <UniversalCheckbox changeStatus={x => x} isDone={true} id={1} case={'Study'} level={'high'}/>;
}

export const UniversalAddButton = () => {
    return <AddButton addItem={x => x} item={''} setItem={x => x} setError={ x=> x}/>;
}

export const UniversalDeleteButton = () => {
    return <DeleteButton onClick={x => x} id={1} />
};

export const UniversalButton = () => {
    return <UniButton onClick={x => x} value={'button name'} filter={'all'} variant={"outlined"}/>
}