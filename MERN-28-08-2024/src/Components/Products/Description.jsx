import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../App';


function Description(props) {



    let theme=useContext(ThemeContext)
    let styleobj=theme==="dark"?
    {
        backgroundColor:"black",
        color:"white"
    }
    
    :
    {
        backgroundColor:"white",
        color:"black"  
    }


    return (
        <div
        style={styleobj}
        >
            <h2>Description</h2>
            
        </div>
    );
}

export default Description;