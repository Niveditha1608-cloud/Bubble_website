import React from 'react';
import userstyle from "./useritems.module.css"

function Useritem({user}) {

    let inteam={backgroundColor:"aquamarine"}
    let notinteam={backgroundColor:"grey"}
    return (
        <div style={user.inteam?inteam:notinteam} className={userstyle.item}>
            <h2>{user.name}</h2>
            <p>{user.location}</p>
            <p>{user.Age}</p>
            <p>{user.hobby}</p>
        </div>
    );
}

export default Useritem;