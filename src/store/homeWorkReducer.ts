
export type SortActionType = {
    type: 'SORT'
    payload: string
}

export type CheckActionType ={
    type: 'CHECK'
    payload: number
}

export const hwReducer = (state: Array<{id: string, name: string, age: number}>, action: {type: string, payload: string | number}) => {
    switch (action.type) {
        case 'SORT': {
            let stateCopy = [...state];
            if (action.payload === "up") {
                return stateCopy.sort(function (a, b) {
                    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                });
            } else if (action.payload === "down") {
                return stateCopy.sort(function (a, b) {
                    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                    if (nameA < nameB)
                        return 1
                    if (nameA > nameB)
                        return -1
                    return 0
                });
            } else {
                return state
            }
        }
        case 'CHECK': {
            let stateCopy = [...state];
            if (action.payload === 18) {
                return stateCopy.filter(u => u.age > 17);
            } else {
                return state
            }
        }
        default:
            return state;
    }
};

export const Sort = (payload: string): SortActionType => {
    return { type: 'SORT', payload}
}

export const Check = (payload: number): CheckActionType => {
    return {type: 'CHECK', payload}
}