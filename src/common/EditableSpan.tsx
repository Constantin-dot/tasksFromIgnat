import React, {useState} from "react";
import {Input} from "./Input";

type EditableSpanType = {
    item: string,
    addItem: (item: string) => void
    setItem: (value: string) => void
    error: string
    setError: (value: string) => void
}

function EditableSpan(props: EditableSpanType) {
    let [editMode, setEditMode] = useState(false);

    const onEditMode = () => {
        setEditMode(true);
    }

    const offEditMode = () => {
        setEditMode(false);
        props.setItem(props.item);
    }

    return editMode
        ? <Input
            item={props.item}
            addItem={props.addItem}
            setItem={props.setItem}
            offEditMode={offEditMode}
            error={props.error}
            setError={props.setError}
        />
        : <span onDoubleClick={onEditMode}>{props.item}</span>

}

export default EditableSpan;