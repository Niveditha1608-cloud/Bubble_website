import React, { useEffect, useState } from 'react';

function Fetchdemo(props) {
    const [todolist,setlist]=useState([])
    const [error,setError]=useState("")

    useEffect(()=>{
    /*fetch("https://jsonplaceholder.typicode.com/todos").
    then((res)=>res.json()).
    then((jsondata)=>{
        setlist(jsondata)
        setError("")
    }).
    catch((error)=>setError(error))*/

    getdata()
     },[])

    async function getdata()
    {
      try{
      let res= await fetch("https://jsonplaceholder.typicode.com/todos")
      let jsondata=await res.json()
      setlist(jsondata)
      setError("")
      }
      catch(error)
      {
        setError(error)
      }
    }

    let todoitems=todolist.map((todo)=><li key={todo.id}>{todo.title}</li>)
    return (
        <div>
            <p>{error}</p>
            <ul>
                {todoitems}
            </ul>
        </div>
    );
}

export default Fetchdemo;