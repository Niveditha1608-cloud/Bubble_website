import React, { useState } from 'react';
//import "./BMI.css"
import bmistyle from "./BMI.module.css"
import { useContext } from 'react';
import { UsernameContext } from '../App';

function BMI(props) {
    const[height,setheight]=useState(0)
    const[weight,setweight]=useState(0)
    const[bmi,setbmi]=useState(0)
    let uname=useContext(UsernameContext)
     console.log(uname)
    let result={color:"brown",
        fontSize:"20px"
    }
    
    let handleHeight=(event)=>{
     console.log(event.target.value)
     setheight(event.target.value)
    }
    let handleWeight=(event)=>{
        console.log(event.target.value)
        setweight(event.target.value)
    }
   
    let calculateBmi=()=>{
        let b=weight/(height*height)
        setbmi(b)
    }

    return (
        <div>
            <p><input style={{borderWidth:"2px",borderStyle:"solid",borderColor:"brown"}} 
            type="number" placeholder='Height' onChange={handleHeight}/></p>
            <p><input type="number" placeholder='Weight' onChange={handleWeight} /></p>
            <button className={bmistyle.btn+" "+bmistyle.bluetxt} onClick={calculateBmi}>BMI</button>
            <h2 style={result}>Hello {uname}!!Your Bmi is:{bmi}</h2>
        </div>
    );
}

export default BMI;