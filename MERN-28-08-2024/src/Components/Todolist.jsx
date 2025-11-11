//https://jsonplaceholder.typicode.com/todos

import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Todolist(props) {
 
    const[todolist,setlist]=useState([])

    useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/todos").
       then((res)=>setlist(res.data)).
       catch(error=>console.log(error))
    },[])

    let todoitems=todolist.map((todo)=><li>{todo.title}</li>)

    let postdata=()=>{
        let dataobj={
            course:"REact",
            Location:"Chennai",
            date:"17-09-2024"
        }

        axios.post("https://trainingdata-13117.firebaseio.com/courses.json",dataobj).
        then((res)=>console.log(res)).
        catch(error=>console.log(error))
    }

    return (
        <div>
            <ul>
                {todoitems}
            </ul>
            <button onClick={postdata}>postdata</button>
        </div>
    );
}

export default Todolist;