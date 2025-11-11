import React from 'react';
import { users } from './users';
import { useState } from 'react';
import Useritem from './Useritem';


function Userlist(props) {
    const [userlist,setlist]=useState(users)

    let useritems=userlist.map((u)=><Useritem key={u.userid} user={u}/>)
    return (
        <div style={
            {
                display:"flex",
                flexWrap:"wrap",
                flexDirection:"row",
                justifyContent:"center"
            }
        }>
            {useritems}
        </div>
    );
}

export default Userlist;