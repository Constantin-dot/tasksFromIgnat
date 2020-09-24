import {Dispatch} from "react";
import {tasksAPI} from "../api/requests-api";

const initialState: TasksStateType = {
    isLoading: false,
    isChecked: false,
    error: null
}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "SET_LOADING":
            return {...state, isLoading: action.isLoading}
        case "SET_CHECKBOX":
            return {...state, isChecked: action.isChecked}
        case "SET_ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

// actions
export const setLoadingAC = (isLoading: boolean) =>
    ({type: 'SET_LOADING', isLoading} as const)
export const setCheckBoxAC = (isChecked: boolean) =>
    ({type: 'SET_CHECKBOX', isChecked} as const)
export const setErrorAC = (error: string | null) =>
    ({type: "SET_ERROR", error} as const)

// thunks
export const changeCheckboxTC = (isChecked: boolean) => (dispatch: Dispatch<ActionsType>) => {
    tasksAPI.changeCheckbox(isChecked)
        .then((res) => {
            dispatch(setErrorAC(res.data.errorText + ". " + res.data.info))
        })
        .catch((error: any) => {
            dispatch(setErrorAC(error.response.data.errorText + ". " + error.response.data.info));
        })
}

// types
type TasksStateType = {
    isLoading: boolean
    isChecked: boolean
    error: string | null
}
type ActionsType = ReturnType<typeof setLoadingAC> |
    ReturnType<typeof setCheckBoxAC> |
    ReturnType<typeof setErrorAC>