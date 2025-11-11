import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function Axiosdemo(props) {
    const [todolist, setlist] = useState([])
    const [error, setError] = useState("")
    const [isloading,setloading]=useState(false)
    const [isenable,setenable]=useState(false)
    let todoid=2
    useEffect(() => {
        setloading(true)
        axios.get("https://jsonplaceholder.typicode.com/todos").
            then((res) => {
                setloading(false)
                setlist(res.data)
                setError("")
            }).
            catch(error => {
                setloading(false)
                setError(error)
            })
    }, [])

    let todoitems = todolist.map((todo) => <li key={todo.id}>{todo.title}</li>)

    let postdata=()=>{
        let dataobj={coursename:"react",
            date:"16-09-24",
            msg:"react is amazing"}
        setenable(true)
        axios.post("https://trainingdata-13117.firebaseio.com/courses.json",dataobj).
        then((res)=>{console.log(res)
            setenable(false)
            alert("data posted successfully")
        })
    }


    return (
        <div>
            {isloading&&<p>Loading...</p>}
            <p>{error}</p>
          <ul>
            {todoitems}
          </ul>
          <button onClick={postdata} disabled={isenable}>Post data</button>
        </div>
    );
}

export default Axiosdemo;