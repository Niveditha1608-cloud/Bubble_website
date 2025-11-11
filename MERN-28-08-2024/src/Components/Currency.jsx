import React, { useState } from 'react';

function Currency({get_inr}) {


    let handleinr=(event)=>{
      get_inr(event.target.value)
    }

    return (
        <div>
            <input type="number" placeholder='INR' onChange={handleinr}/>
        </div>
    );
}

export default Currency;