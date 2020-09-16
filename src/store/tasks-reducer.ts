const initialState: TasksStateType = {isLoading: false}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "SET_LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

// actions
export const setLoadingAC = (isLoading: boolean) =>
    ({type: 'SET_LOADING', isLoading} as const)

// thunks

// types
type TasksStateType = {
    isLoading: boolean
}
type ActionsType = ReturnType<typeof setLoadingAC>