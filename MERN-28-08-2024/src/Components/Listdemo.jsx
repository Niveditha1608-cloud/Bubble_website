import React, { useState } from 'react';

function Listdemo(props) {
    const[userlist,setlist]=useState(["sachin","virat","dhoni"])

    let useritems=userlist.map((item,index)=><li key={index}>{item}</li>)

    return (
        <div>
            <ul>
                {useritems}
            </ul>
        </div>
    );
}

export default Listdemo;    