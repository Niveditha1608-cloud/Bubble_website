import React, { useEffect, useState } from 'react';

function Useffectdemo(props) 
{

    const [counter,setcounter]=useState(0)
    const [msg,setmsg]=useState("hello")

    useEffect(()=>{console.log("UE1:Executed after each rendering")})
    useEffect(()=>{console.log("UE2:Executed after Initial rendering")},[])
    useEffect(()=>{console.log("UE3:Executed after counter/msg change")},[counter,msg])

    console.log("Before rendering..")
    return (
        <div>
            <h1>Useffect demo</h1>
            <p>{counter}</p>
            <button onClick={()=>{setcounter(counter+1)}}>+</button>
            <p>{msg}</p>
            <button onClick={()=>{setmsg(msg+"!")}}>change msg</button>
        </div>
    );

    
}

export default Useffectdemo;

/*
-handle side effects
-it will we be executed after rendering


side effects=> accessing some thing outside the scope

file,
api

*/
