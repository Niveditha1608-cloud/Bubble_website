import { useEffect, useState } from "react"

export let useFetch=(url)=>{
    const [datalist,setlist]=useState([])

    useEffect(()=>{
        fetch(url).
        then((res)=>res.json()).
        then((jsondata)=>setlist(jsondata))
    })

    return datalist
}

export let useCounter=(initialvalue,min,max)=>{
    const [counter,setcounter]=useState(initialvalue)
    
    let increment=()=>{
        if(counter<max)
        {
            setcounter(counter+1)
        }
    }
    let decrement=()=>{
        if(counter>min)
        {
            setcounter(counter-1)
        }
    }

    return [counter,increment,decrement]

}