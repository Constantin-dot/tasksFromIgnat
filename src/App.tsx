import React from 'react';
import './App.modul.css';
import {StateType} from './index';


type PropsType = {
    state: StateType
}


const App: React.FC<PropsType> = (props) => {
  return (
    <div className={"App"}>
      <div className={"ava"}>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU"} alt={"ava"}></img>
      </div>
      <div className={"messageBox"}>
        <div className={"authorName"}>{props.state.name}</div>
        <div className={"message"}>{props.state.message}</div>
        <div className={"time"}>{props.state.time}</div>
      </div>
    </div>
  );
}

export default App;
