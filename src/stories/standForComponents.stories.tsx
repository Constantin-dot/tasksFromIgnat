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
    return <EditableSpan item={'This is editable span. Change me!'} addItem={x => x} setItem={x => x} error={''} setError={x => x}/>
}

export const UniversalRadio = () => {
    return <UniRadio value={'b'} title={'new item'} list={[{id: 1, city: 'a'},
        {id: 2, city: 'b'},
        {id: 3, city: 'c'},
        {id: 4, city: 'd'},]} onChange={x => x}/>
}

export const UniversalSelect = () => {
    return <UniSelect way={[{id: 1, way: "a"},
        {id: 2, way: "b"},
        {id: 3, way: "c"},
        {id: 4, way: "d"}]} title={'new item'} onChange={x => x} transport={'a'}/>
}