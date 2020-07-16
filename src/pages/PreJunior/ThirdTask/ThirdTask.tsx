import React, {useState} from 'react';
import ThirdTaskMessage from "./ThirdTaskMessage";
import {v1} from "uuid";

export type NamesArrayType = {id: string, followerName: string}


export type StateType = {
    img: string
    myName: string
    namesArr: Array<NamesArrayType>
    time: string
}

const ThirdTask = () => {
    let [namesArr, setNameArr] = useState<Array<NamesArrayType>>([]);

    function addFollower(followerName: string) {
        let follower = {id: v1(), followerName: followerName};
        let newFollower = [follower,...state.namesArr];
        setNameArr(newFollower);
        alert("Hello, " + follower.followerName);
    }

    let state: StateType = {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU",
        myName: "Constantin",
        namesArr: namesArr,
        time: "15:27"
    }

    return (
        <ThirdTaskMessage
            state={state}
            namesArr={namesArr}
            addItem={addFollower}
        />
    );
}

export default ThirdTask;