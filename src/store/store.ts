import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {themesReducer} from "./themes-reducer";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    themes: themesReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;