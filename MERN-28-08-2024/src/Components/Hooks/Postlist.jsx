import React, { useState } from 'react';
import { useEffect } from 'react';
import { useFetch } from './Customhooks';

function Postlist(props) {
   let postlist=useFetch("https://jsonplaceholder.typicode.com/users")

    
    let postitems=postlist.map((p)=><li>{p.title}</li>)


    return (
        <div>
            <ul>
                {postitems}
            </ul>   
        </div>
    );
}

export default Postlist;


/*
Postlist()=>postlist[]=>fetch()=>postitems[]=>[]
                        =>setlist(data)=>Postlist()
Postlist()=>fetch()=>postitems[...]=>[...]
            =>setlist(data)=>Postlist()     
Postlist()=>fetch()=>postitems[...]=>[...]
            =>setlist(data)=>Postlist()  
Postlist()=>fetch()=>postitems[...]=>[...]
            =>setlist(data)=>Postlist()  
Postlist()=>fetch()=>postitems[...]=>[...]
            =>setlist(data)=>Postlist()         
*/

/*
Postlist()=>postlist[]=>postitems[]=>render []
=>useEffect()=>fetch()=>setlist(data)=>Postlist()

Postlist()=>postitems[...]=>render [....]

*/