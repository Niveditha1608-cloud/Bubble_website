import React from 'react';
import { useState } from 'react';

function Usercomp(props) {
    const [user,setuser]=useState({name:"sachin",age:50})

   let updateage=()=>{
    if(user.age<props.maxage)
    {
      setuser((prevstate)=>{return {name:prevstate.name,age:prevstate.age+1}})
    }
}
    return (
        <div>
            <p>username:{user.name}</p>
            <p>Age:{user.age}</p>
            <button onClick={updateage}>update age</button>
        </div>
    );
}

export default Usercomp;