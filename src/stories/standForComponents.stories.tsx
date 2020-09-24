import React from 'react';
import {Input} from "../common/Input";
import {AddButton} from "../common/AddButton";
import {DeleteButton} from "../common/DeleteButton";
import {UniButton} from "../common/UniButton";
import EditableSpan from "../common/EditableSpan";
import {UniCheckbox} from "../common/UniCheckbox";
import {UniRadio} from "../common/UniRadio";
import {UniSelect} from "../common/UniSelect";



export default {
    title: 'StandForComponents',
};

export const JuniorPlus = () => {
    return <JuniorPlus />
}

export const UniversalInput = () => {
    return <Input setError={x => x} setItem={x => x} item={''} error={''} addItem={x => x}/>;
}

export const UniversalCheckbox = () => {
    return <UniCheckbox onChange={() => {}} isDone={true}/>
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
    return <EditableSpan item={'This is editable span. Change me!'} addItem={x => x} setItem={x => x} error={''} setError={x => x}/>
}

export const UniversalRadio = () => {
    return <UniRadio color={"primary"} value={'b'} title={'new item'} list={[{id: 1, item: 'a'},
        {id: 2, item: 'b'},
        {id: 3, item: 'c'},
        {id: 4, item: 'd'},]} onChange={x => x}/>
}

export const UniversalSelect = () => {
    return <UniSelect list={[{id: 1, item: "a"},
        {id: 2, item: "b"},
        {id: 3, item: "c"},
        {id: 4, item: "d"}]} title={'new item'} onChange={x => x} value={'a'}/>
}

