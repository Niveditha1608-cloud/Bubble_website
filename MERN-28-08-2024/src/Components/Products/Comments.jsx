import React from 'react';
import { useContext } from 'react';
import { UsernameContext } from '../../App';

function Comments(props) {
    let uname=useContext(UsernameContext)
    return (
        <div>
            <p>Hi {uname}</p>
            <h2>Comments</h2>
        </div>
    );
}

export default Comments;