import { useState } from "react"
import Currency from "./Currency"

function Comp1(){
    const[usd,setUsd]=useState(0)
   
    let getinr=(inr)=>{
        setUsd(inr*83)    }
    return (
        <div>
            <p>Parent comp-USD:{usd}</p>
            <Currency get_inr={getinr}/>
        </div>
    )
}

export default Comp1