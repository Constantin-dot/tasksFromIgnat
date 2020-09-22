const initialState: ThemesStateType = {theme: "Light"}

export const themesReducer = (state: ThemesStateType = initialState, action: ActionsType): ThemesStateType => {
    switch (action.type) {
        case "SET_THEME":
            return {...state, theme: action.theme}
        default:
            return state
    }
}

// actions
export const setThemeAC = (theme: string) =>
    ({type: 'SET_THEME', theme} as const)

// thunks

// types
type ThemesStateType = {
    theme: string
}
type ActionsType = ReturnType<typeof setThemeAC>