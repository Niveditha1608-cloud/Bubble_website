import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Jsondemo(props) {
    const[productlist,setlist]=useState([])
    

    useEffect(()=>{
        getData()
    },[])

    let getData=()=>{
        axios.get("http://localhost:3003/products").
        then(res=>setlist(res.data))
    }

    let postdata=()=>{
        let dataobj={
            id:productlist.length+1,
            name:"monitor"
        }
        axios.post("http://localhost:3003/products",dataobj).then(res=>getData())
    }


    let listitems=productlist.map((product)=><li>{product.id}-{product.name}</li>)

    return (
        <div>
           <ul>
            {listitems}
            </ul> 
            <button onClick={postdata}>postdata</button>
        </div>
    );
}

export default Jsondemo;