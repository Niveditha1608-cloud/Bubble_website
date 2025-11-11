import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function Uncontrolledform(props) {
    let unameRef=useRef()
    let emailRef=useRef()
    let pwRef=useRef()
    let cpwRef=useRef()
    const [pwerror,seterror]=useState(false)


    let handleSubmit=(e)=>{
        e.preventDefault()
        
        let uname=unameRef.current.value
        let email=emailRef.current.value
        let pw=pwRef.current.value
        let cpw=cpwRef.current.value
        if(pw!==cpw)
        {
          seterror(true)
        }
        else
        {
           seterror(false)
           console.log("Form submitted...")
        }
    }
    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <p><input type="text" placeholder='Username' ref={unameRef}/></p>
                <p><input type="email" placeholder='Email' ref={emailRef}/></p>
                <p><input type="password" placeholder='password' ref={pwRef}/></p>
                <p><input type="password" placeholder='Confirm password' ref={cpwRef}/></p>
                {pwerror&&<p>Password Doesnot match</p>}
                <input type="submit" value="Register"/>
            </form>
        </div>
    );
}

export default Uncontrolledform;