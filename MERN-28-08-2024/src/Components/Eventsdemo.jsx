import React, { useState } from 'react';

function Eventsdemo(props) {
    const [msg,setMsg]=useState("")

    let changeMsg=(info)=>{
        setMsg(info)
    }
     
    let bluebg={
        backgroundColor:"blue",
        color:"white"
    }
    let redbg={
        backgroundColor:"red",
        color:"green"
    }


    return (
        <div>
            <p 
            style={msg==="hi"?bluebg:redbg}
            >{msg}</p>
            <button onClick={()=>{changeMsg("hello")}}>set hello</button>
            <button onClick={()=>{setMsg("hi")}}>set hi</button>

        </div>
    );
}

export default Eventsdemo;


//cond?true statement:false statement