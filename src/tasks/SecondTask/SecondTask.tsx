import React, {useState} from "react";
import SecondTaskMessage from "./SecondTaskMessage";

export type CasesType = {
    id: number
    case: string
    level: string
}

export type StateType = {
    img: string
    name: string
    time: string
}

export type FilterValuesType = "all" | "low" | "middle" | "high" | "highest";

function SecondTask() {
    
    let state: StateType = {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU",
        name: "Constantin",
        time: "15:25"
    }

    let [cases, setCases] = useState<Array<CasesType>>([
        {id: 1, case:"work", level:"middle"},
        {id: 2, case:"study", level:"highest"},
        {id: 3, case:"reading", level:"high"},
        {id: 4, case:"walks", level:"low"}
    ])

    let [filter, setFilter] = useState<FilterValuesType>("all");

    function removeCases(id: number) {
        let filteredCases = cases.filter( c => c.id !==id)
        setCases(filteredCases);
    }

    function changeCases(value: FilterValuesType) {
        setFilter(value);
    }

    let casesForMessage = cases;
    if (filter === "low") {
        casesForMessage = cases.filter(c => c.level === "low");
    }
    if (filter === "middle") {
        casesForMessage = cases.filter(c => c.level === "middle");
    }
    if (filter === "high") {
        casesForMessage = cases.filter(c => c.level === "high");
    }
    if (filter === "highest") {
        casesForMessage = cases.filter(c => c.level === "highest");
    }

    return (
        <SecondTaskMessage
            state={state}
            cases={casesForMessage}
            removeCases={removeCases}
            changeCases={changeCases}
        />

    )
}

export default SecondTask;