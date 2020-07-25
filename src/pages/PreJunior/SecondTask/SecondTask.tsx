import React, {useState} from "react";
import SecondTaskMessage from "./SecondTaskMessage";

export type CasesType = {
    id: number
    case: string
    level: string
    isDone: boolean
}

export type StateType = {
    img: string
    name: string
    time: string
}

// export type FilterValuesType = "all" | "low" | "middle" | "high" | "highest";

function SecondTask() {
    
    let state: StateType = {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU",
        name: "Constantin",
        time: "15:25"
    }

    let [cases, setCases] = useState<Array<CasesType>>([
        {id: 1, case:"work", level:"middle", isDone: false},
        {id: 2, case:"study", level:"highest", isDone: true},
        {id: 3, case:"reading", level:"high", isDone: false},
        {id: 4, case:"walks", level:"low", isDone: true}
    ])

    let [filter, setFilter] = useState<string>("all");

    function removeCases(id: number) {
        let filteredCases = cases.filter( c => c.id !==id)
        setCases(filteredCases);
    }

    function changeCases(value: string) {
        setFilter(value);
    }

    function changeStatus(caseId: number, isDone: boolean) {
        let findCase = cases.find( t => t.id === caseId);
        if (findCase) {
            findCase.isDone = isDone;
        }
        setCases([...cases]);
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
    if (filter === "active") {
        casesForMessage = cases.filter(c => !c.isDone);
    }
    if (filter === "completed") {
        casesForMessage = cases.filter(c => !c.isDone);
    }

    return (
        <SecondTaskMessage
            state={state}
            cases={casesForMessage}
            removeCases={removeCases}
            changeCases={changeCases}
            changeStatus={changeStatus}
            filter={filter}
        />

    )
}

export default SecondTask;