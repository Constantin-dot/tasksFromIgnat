import React from "react";

export type StateType1 = {
    img: string
    name: string
    message: string
    time: string
}

export let state1: StateType1 = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU",
    name: "Constantin",
    message: "Hi!What's up?",
    time: "15:23"
}

type ArrayCasesType = {
    id: number
    c: string
    l: string
}

export type StateType2 = {
    img: string
    name: string
    cases: Array<ArrayCasesType>
    time: string
}

export let state2: StateType2 = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU",
    name: "Constantin",
    cases: [
        {id: 1, c:"work", l:"middle"},
        {id: 2, c:"study", l:"highest"},
        {id: 3, c:"reading", l:"high"},
        {id: 4, c:"walks", l:"low"}
    ],
    time: "15:25"
}
