import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Controlledform(props) {

    const [uname, setuname] = useState("sachin123")
    const [pw, setpw] = useState("")
    const [uerror, seterror] = useState(false)

    let navigate=useNavigate()

    let handleUname = (e) => {
        let uname = e.target.value
        if (uname.length < 3) {
            seterror(true)
            setuname(e.target.value)
        }
        else {
            seterror(false)
            setuname(e.target.value)
        }

    }
    let handlePw = (e) => {
        setpw(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted")
        console.log(uname)
        axios.get("https://jsonplaceholder.typicode.com/users",{params:{username:uname}}).then((res)=>{
            if(res.data.length>0)
            {
                navigate("/products")
            }
            else{
                alert("Pls check the credentials")
            }
        })
       
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p><input type="text" placeholder='Username' value={uname} onChange={handleUname} /></p>
                {uerror&&<p>Pls enter valid username</p>}
                <p><input type="Password" placeholder='Password' value={pw} onChange={handlePw} /></p>
                <input type="submit" value="Login" disabled={uerror}/>
            </form>
        </div>
    );
}

export default Controlledform;