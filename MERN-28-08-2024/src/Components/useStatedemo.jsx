import React, { useState } from 'react';

function UseStatedemo(props) {
    const [counter,setCounter]=useState(0)//it will executed for initial rendering
    
    console.log("counter render..")
    let decrement=()=>{
        //setCounter(counter-1)//counter=counter-1
         setCounter((prevcounter)=>prevcounter-1)
    }
    let increment=()=>{
        setCounter(counter+1)//counter=counter+1
        //counter=counter+1
        //console.log(counter)
    }

    return (
        <div>
             <button onClick={decrement}>-</button>
             <span>{counter}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default UseStatedemo;

/* comp render initial value =>-0+
/* setCounter(counter-1)=>counter=-1=>useStateDemo()=><div>
             <button onClick={decrement}>-</button>
             <span>{-1}</span>
            <button onClick={increment}>+</button>
        </div>
        =>browser
setCounter(counter+1)=>counter=0=>useStateDemo() =>  
    <div>
             <button onClick={decrement}>-</button>
             <span>{0}</span>
            <button onClick={increment}>+</button>
        </div>
        
        
        
*/