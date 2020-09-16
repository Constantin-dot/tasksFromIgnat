import {Check, hwReducer, Sort} from "./homeWork-reducer";
import {v1} from "uuid";

type UserType = {
    id: string,
    name: string,
    age: number
}
let startState: UserType[];

test('array should be resorted by name from A to Z', () => {
    startState = [
        {id: v1(), name: "IvanovIvan", age: 32},
        {id: v1(), name: "PetrovaMariya", age: 16},
        {id: v1(), name: "SholohovDmitriy", age: 28},
        {id: v1(), name: "NovinskayaAnna", age: 26},
        {id: v1(), name: "KuznetsovGerman", age: 13},
    ];

    const endState = hwReducer(startState, Sort('up'));

    expect(endState[0].name).toBe("IvanovIvan");
    expect(endState[4].name).toBe("SholohovDmitriy");
});

test('array should be resorted by name from Z to A', () => {
    startState = [
        {id: v1(), name: "IvanovIvan", age: 32},
        {id: v1(), name: "PetrovaMariya", age: 16},
        {id: v1(), name: "SholohovDmitriy", age: 28},
        {id: v1(), name: "NovinskayaAnna", age: 26},
        {id: v1(), name: "KuznetsovGerman", age: 13},
    ];

    const endState = hwReducer(startState, Sort('down'));

    expect(endState[0].name).toBe("SholohovDmitriy");
    expect(endState[4].name).toBe("IvanovIvan");
});

test('array should be resorted by age more then 18', () => {
    startState = [
        {id: v1(), name: "IvanovIvan", age: 32},
        {id: v1(), name: "PetrovaMariya", age: 16},
        {id: v1(), name: "SholohovDmitriy", age: 28},
        {id: v1(), name: "NovinskayaAnna", age: 26},
        {id: v1(), name: "KuznetsovGerman", age: 13},
    ];

    const endState = hwReducer(startState, Check(18));

    expect(endState.length).toBe(3);
});