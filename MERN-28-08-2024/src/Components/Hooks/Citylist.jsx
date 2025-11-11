import React, { useState } from 'react';
import { useCounter } from './Customhooks';

function Citylist(props) {
    const[citylist,setlist]=useState(["chennai","mumbai","pune","delhi"])
    
    const[index,inc,dec]=useCounter(0,0,3)//[counter,increment,decrement]


    return (
        <div>
            <button onClick={dec}>{"<"}</button>
            <span>{citylist[index]}</span>
            <button onClick={inc}>{">"}</button>
        </div>
    );
}

export default Citylist;