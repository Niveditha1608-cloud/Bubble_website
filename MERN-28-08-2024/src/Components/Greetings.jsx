import React from 'react';
import PropsTypes from "prop-types"
import Todolist from './Todolist';
import Axiosdemo from './APIdemo/Apidemo/Axiosdemo';
import Jsondemo from './Jsondemo';

function Greetings({msg,name,age}) {
    //{msg,name,age}={msg:"welcome",name:"sachin"}
    //props.name="peter"//error//props are immutable
    //msg="Good morning"//immutable property will be lost
    return (
        <div>
            <p>{msg}-{name}</p>
            <p>age:{age}</p>
       
        </div>
    );
}

Greetings.defaultProps={
    age:20,
    name:"Jhon"
}

Greetings.propTypes={
    msg:PropsTypes.string.isRequired
}



export default Greetings;