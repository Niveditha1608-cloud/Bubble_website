import React from 'react';
import { useState,useEffect } from 'react';

import { useFetch } from './Customhooks';

function Usernamelist(props) {
    let userlist=useFetch("https://jsonplaceholder.typicode.com/users")
    
    let useritems=userlist.map((u)=><li>{u.name}</li>)


    return (
        <div>
            <ul>
                {useritems}
            </ul>   
        </div>
    );
}
export default Usernamelist;