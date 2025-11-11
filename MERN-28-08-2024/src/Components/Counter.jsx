import React, { useState } from 'react';


function Counter({max,min,step}) {
    const[counter,setCouter]=useState(0)
    const [msg,setmsg]=useState("Hello")

    console.log("counter render")
    let increment=()=>{
        if(counter<max)
        {
        setCouter((prevcounter)=>prevcounter+2)
        console.log(counter)
        setCouter((prevcounter)=>prevcounter+2)
        //setmsg(msg+"!")
        }
        else{
            alert("Max value reached")
        }
    }
    let decrement=()=>{
        if(counter>min)
        {
        setCouter(counter-step)
        }
        else{
            alert("Min value reached")
        }
    }
    return (
        <div>
            <button className="btn" onClick={decrement}>-</button>
            <span>{counter}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;