import React from 'react';
import './App.modul.css';

function App() {
  return (
    <div className={"App"}>
      <div className={"ava"}>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU"} alt={"ava"}></img>
      </div>
      <div className={"messageBox"}>
        <div className={"autorName"}>Constantin</div>
        <div className={"message"}>Hi!What's up?</div>
        <div className={"time"}>15:23</div>
      </div>
    </div>
  );
}

export default App;
