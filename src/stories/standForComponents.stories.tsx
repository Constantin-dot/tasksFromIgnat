import React from 'react';
import {Input} from "../common/Input";
import {AddButton} from "../common/AddButton";
import {DeleteButton} from "../common/DeleteButton";
import {UniButton} from "../common/UniButton";
import EditableSpan from "../common/EditableSpan";
import {UniCheckbox} from "../common/UniCheckbox";



export default {
    title: 'StandForComponents',
    // component: AddButton,
};

export const UniversalInput = () => {
    return <Input setError={x => x} setItem={x => x} item={''} error={''} addItem={x => x}/>;
}

export const UniversalCheckbox = () => {
    return <UniCheckbox changeStatus={x => x} isDone={true} id={1} case={'Study'} level={'high'}/>;
}

export const UniversalButton = () => {
    return <UniButton onClick={() => {}} value={'button name'} />
}

export const UniversalAddButton = () => {
    return <AddButton addItem={x => x} item={''} setItem={x => x} setError={ x=> x}/>;
}

export const UniversalDeleteButton = () => {
    return <DeleteButton onClick={x => x} id={1} />
}

export const UniversalEditableSpan = () => {
    return <EditableSpan item={'new item'} addItem={x => x} setItem={x => x} error={''} setError={x => x}/>
}